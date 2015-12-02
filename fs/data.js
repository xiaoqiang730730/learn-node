;(function($, RC) {
    var rct = RC.template,
        rce = RC.events,
        rcp = RC.pages,
        rcc = RC.controls,
        rcu = RC.util,
        rcu_date = rcu.date,
        rcl = RC.localcache,
        API = window.API,
        ctrl = {
            name: 'itemCommonFun',
            _authorKey: {
                showcase: 'auto_showcase', //自动橱窗
                adjust: 'auto_adjust', // 自动上下架
                title: 'title_optimize', //标题优化
                mobile: 'phone_detail', //手机详情
                recommend: 'template_recommend', //宝贝推荐
                poster: 'template_poster', //海报推广
                watermark: 'promotion_watermark', //促销水印
                flash: 'main_figure_video', //主图视频
                stackWarn: 'item_sku_num_warning', // 库存预警
                itemShare: 'item_share' // 宝贝分享
            },
            _appName: {
                title: 'btyh', //标题优化
                mobile: 'sjxq', //手机详情
                adjust: 'sxjyh', //自动上学架
                showcase: 'ccyh', //自动橱窗
                flash: 'ztsp', //主图视频
                stackWarn: 'kcyj',// 库存预警
                itemShare: 'bbfx'// 宝贝分享
            },
            getLeftWord: function(str) {
                var realLength = 0;
                for (var i = 0; i < str.length; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode >= 0 && charCode <= 128)
                        realLength += 1;
                    else
                        realLength += 2;
                }
                return realLength;
            },
            /**
             * 设置输入标题的文本框 不能超过XX数字
             * @param {[type]} limitLength [限制个数]
             * @param {[type]} $el         [目标元素input]
             * @param {[type]} $num [显示个数元素span]
             * @param {[type]} forbidinputboolen [是否允许输入]
             */
            setTitle: function(limitLength, $el, $num, forbidinputboolen) {
                var str = $el.val();
                var left = this.getLeftWord(str);
                limitLength = limitLength * 2;
                if (forbidinputboolen) {
                    if (left <= limitLength) {
                        $num.text(Math.ceil(left / 2));
                        this.titleVal = str;
                    } else {
                        $el.val(this.titleVal);
                    }
                } else {
                    $num.text(Math.ceil(left / 2));
                    this.titleVal = str;
                }
            },
            // 判断其他app是否有权限
            _getOtherAppAuthor: function(key, success, fail) {
                API.getAuthorize({
                    type: key
                }, function(result) {
                    if (success) {
                        success(result.data.status);
                    }
                }, function(result) {
                    if (fail) {
                        fail(result);
                    }
                });
            },

            _getAppAuthor: function(key, success){
                var _this = this;
                this._getOtherAppAuthor(key, function(result){
                    if(result){
                        success();
                    }else{
                        vipVersionTip(_this._appName[key]); // 在头部 bar.js里面
                    }
                });
            },
            // 判断其他app是否在屏蔽中
            _getOtherAppShield: function(appName, success, fail) {
                API.getAppShield({
                    appNames: appName
                }, function(result) {
                    if (success) {
                        success(result);
                    }
                }, function(result) {
                    if (fail) {
                        fail(result);
                    }
                });
            },

            getRCUserInfo: function(callback) {
                if (!RC.user.get('sessionKey')) {
                    API.getRCUserInfo(function(result) {
                        RC.user.set({
                            remaining: result.data.remaining,
                            sessionKey: result.data.sessionKey,
                            shopId: result.data.shopId,
                            vipLevel: result.data.vipLevel
                        });
                        if(callback){
                            callback();
                        }
                    }, function() {});
                }
            },
            _noShield: function(data) {
                var html = getShieldTipHtml(data.appname, data.minutes, data.content);
                var dialog = $.dialog({
                    title: '系统提示',
                    content: html,
                    cancel: function() {
                        dialog = null;
                        // dialog.remove();
                    }
                });
            },
            /**
             * 权限判断
             * @param  {[type]}   data     [{type:,}]
             * @param  {Function} callback [description]
             * @return {[type]}            [description]
             */
            gotoUrl: function(data, callback) {
                var _this = this;
                _this._getOtherAppAuthor(_this._authorKey[data.type], function(result) {
                    if (result) {
                        if (RC.user.get('sessionKey')) {
                            _this._getOtherAppShield(_this._appName[data.type], function(result) {
                                if (result.result == '1') {
                                    if (result[_this._appName[data.type]]) {
                                        var app = result[_this._appName[data.type]];
                                        if (app.status == '屏蔽中') {
                                            _this._noShield({
                                                appname: _this._appName[data.type],
                                                minutes: app.shieldMinutes,
                                                content: app.content
                                            });
                                        } else {
                                            RC.clearShow();
                                            callback && callback(data);
                                            //_this.view.update('goUrl', data.url);
                                            //window.location.href = data.url;
                                        }
                                    } else {
                                        RC.clearShow();
                                        callback && callback(data);
                                        //_this.view.update('goUrl', data.url);
                                        //window.location.href = data.url;
                                    }
                                }
                            }, function(t) {
                                console.log(t);
                            });
                        } else {
                            RC.clearShow();
                            showNoSessionDlg('亲，该应用需授权之后才能使用！', data.url); // 在qianniu_onload.js里面
                        }
                    } else {
                        RC.clearShow();
                        vipVersionTip(_this._appName[data.type]); // 在头部 bar.js里面
                    }
                }, function() {
                    // todo 请求出错
                });
            },
            getEditUrl: function(shopType, id) {
                var url;
                var shopLink = {
                    B: 'https://upload.tmall.com/auction/publish/edit.htm?spm=0.0.0.0.nqqQ6v&itemNumId=&auto=false',
                    C: 'https://upload.taobao.com/auction/publish/edit.htm?spm=0.0.0.0.nqqQ6v&itemNumId=&auto=false'
                };
                if (shopType == 'B') {
                    url = shopLink.B.replace('itemNumId=', 'itemNumId=' + id);
                } else {
                    url = shopLink.C.replace('itemNumId=', 'itemNumId=' + id);
                }
                return url;
            },
            getCopyLink: function(link){
                try {
                    var clipboard = workbench.platform.clipboard;
                    clipboard.setData(0, link);
                    RC.showSuccess("复制成功", 0.5);
                } catch (err) {}
            }
        };
    rcc.define(ctrl.name, ctrl);
})(jQuery, window.RayCloud);