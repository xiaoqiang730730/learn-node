var fs = require('fs');

//*********************
//  方法说明：
//      获取真实路径。
//      可以使用process.cwd解决相对路径。
//  语法：
//      fs.realpath(path, [cache], [callback(err , resolvedPath)])
//      由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
//  接收参数：
//      path           路径
//      cache          可选，一个文字的映射路径可用于强制一个特定的路径解决或避免额外的fs.stat需要知道真正的路径对象。
//      callback       回调
//          err               异常
//          resolvedPath      真实地址
//
//**********************
//
//


fs.realpath('./datatest.txt', function(err, resolvedPath){
    if(err){
        throw err;
    }
    console.dir(resolvedPath);
});

// fs.realpathSync(path, [cache])