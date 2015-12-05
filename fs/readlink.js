var fs = require('fs');

// 方法说明：
//     以异步的方式读取链接。
// 语法：
//     fs.readlink(path, [callback(err,linkString)])
//     由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//  path          路径
//  callback    回调，传递2个参数，异常err 和  linkString返回的链接字符串
//  

fs.readlink('./datatest.txt', function(err, linkString){
    if(err){
        throw err;
    }
    console.dir(linkString);
});

// fs.readlinkSync(path)