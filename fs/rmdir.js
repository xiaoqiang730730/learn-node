var fs = require('fs');

//  方法说明:
//      以异步的方式删除文件目录。
//  语法：
//      fs.rmdir(path, [callback(err)])
//      由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
//  接收参数：
//      path  目录路径
//      callback   回调，回调函数传递一个err异常参数。
//      

fs.rmdir('./test', function(err){
    if(err){
        throw err;
    }
    console.log('success');
});

// fs.rmdirSync(path)