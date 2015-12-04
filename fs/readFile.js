var fs = require('fs');

// ************************************
// 方法说明：
//     以异步的方式读取文件内容。
//     不置顶内容编码的情况下，将以buffer的格式输出，如：<Buffer 32 33 31 32 33 31 32 33 31 32 33>
// 语法：
//     fs.readFile(filename, [encoding], [callback(err,data)])
//     由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//     filename    文件路径
//     options      option对象，包含 encoding，编码格式，该项是可选的。
//     callback      回调，传递2个参数 异常err 和 文件内容 data
// ************************************
// 
// 
    fs.readFile('./datatest.txt', 'utf-8', function(err, data){
        if(err){
            throw err;
        }
        console.log(data);
    });

    // fs.readFileSync(filename, [options])