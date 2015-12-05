var fs = require('fs');
// ***********************************
// 方法说明： 
//     以异步的方式读取文件目录。
// 语法：
//     fs.readdir(path, [callback(err,files)])
//     由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//     path  目录路径
//     callback   回调，传递两个参数 err 和 files，files是一个包含 “ 指定目录下所有文件名称的” 数组。
// ***********************************
// 
// 

fs.readdir('./datatest', function(err, files){
    if(err){
        throw err;
    }
    console.dir(files);
});

// fs.readdirSync(path)