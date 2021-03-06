var fs = require('fs');

//*******************
//
//  方法说明：
//      异步方式修改文件时间戳。
//  语法：
//      fs.utimes(path, atime, mtime, callback)
//      由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
//  接收参数：
//      path           文件路径
//      mtime        修改时间 ，表示文件被修改的时间和日期。文件的内容发生改变时，文件的修改日期将随之更新
//      atime         访问时间 ，表示文件最后被访问的时间和日期。 每一次应用程序或服务使用系统调用，读取一个文件时，文件的访问时间都会更新。
//      callback     回调，传递一个异常参数err
//
//******************
//

fs.utimes('125.txt', atime, mtime, function(err){
    if(err){
     throw err;
    }
    console.log('time update');
});

// fs.utimesSync(path, atime, mtime)