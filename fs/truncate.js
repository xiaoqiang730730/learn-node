var fs = require('fs');

//************************
//方法说明： 
// 文件内容截取操作。
// 语法：
//      fs.truncate(path, len, [callback(err)])
// 由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//      path           文件路径
//      len              截断长度，只保留该字符长度内的字符，超出部分将被清除。
//      callback      回调，传递一个异常参数err
//      
//*************************
//
//

// 内部源码是先fs.open 文件，然后再使用fs.ftruncate 
fs.truncate('./datetest.txt', 3, function(err){
    if(err){
        throw err;
    }
    console.log('文件内容截取成功');
});


// fs.truncateSync(path, len)