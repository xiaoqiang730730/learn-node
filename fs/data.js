;(function($, RC) {
        var ctrl = {
            name: 'itemCommonFun',
            getLeftWord: function(str) {
            },
            setTitle: function(limitLength, $el, $num, forbidinputboolen) {
            },
            // 判断其他app是否有权限
            _getOtherAppAuthor: function(key, success, fail) {
            },

            _getAppAuthor: function(key, success){
            },
            _getOtherAppShield: function(appName, success, fail) {
            },

            getRCUserInfo: function(callback) {
            },
            _noShield: function(data) {
            },
            getCopyLink: function(link){
            }
        };
    rcc.define(ctrl.name, ctrl);
})(jQuery, window.RayCloud);