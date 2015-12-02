    var fs = require('fs');

//************
//
// ftruncate()
//文件内容截取操作
//
//接收参数：
// fd         文件描述符是一个非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引

// len              截断长度，只保留该字符长度内的字符，超出部分将被清除。

// callback      回调，传递一个异常参数err
//************
//
//
//
    var fd = fs.openSync('./datatest.txt', 'r+');
    console.dir(fd);
    fs.ftruncate(fd, 3, function(error){
        if(error){
            throw error;
        }else{
            console.dir('success');
        }
    });

    // fs.ftruncateSync('./datatest.js', 3);