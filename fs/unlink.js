var fs = require('fs');

//***********************
// 删除文件操作
// 
// 接收参数：
// fd      文件描述符
// callback     回调，传递一个异常参数err
// 
//**********************
//
//
fs.unlink('./unlink.js', function(err){
    if(err){
        throw err;
    }
    console.log('删除成功');
});

// fs.unlinkSync(path)