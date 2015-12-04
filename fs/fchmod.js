var fs = require('fs');

// 方法说明： 
//    更改文件权限（文件描述符）。
// 语法:
//      fs.fchmod(fd, mode, [callback(err)])
//      由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//      fd                文件描述符
//      mode          文件权限
//      callback      回调，传递异常参数err
//      

fs.open('./datatest.txt', 'a', function(err, fd){
    if(err){
        throw err;
    }
    fs.fchmod(fd, 0777, function(err){
        if(err){
            throw err;
        }
        console.log('success');
    });
});


// fs.fchmodSync(fd, mode)

