var fs = require('fs');

//****************
//
//方法说明： 
//    更改文件权限（不解析符号链接）
// 语法：
//    fs.lchmod(path, mode, [callback(err)])
//    由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//    path          路径
//    mode          文件权限
//    callback      回调，传递异常参数err
//
//*****************
//


fs.chmod('./datatest.txt', 0777, function(err){
    if(err){
        throw err;
    }
    console.log('success');
});