var fs = require('fs');

// *****************************
//方法说明:
//返回一个readStream（输出流）对象（可写流
//语法：
//fs.createReadStream(path, [options])
//由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
//接收参数：
//path    文件路径
//option (object) 参数包含以下属性：
//    { flags: 'r',
    //   encoding: null,
    //   fd: null,
    //   mode: 0666,
    //   autoClose: true
    // }
//    option包含一个启动选项用来允许在某些文件的开头位置写数据。
//    flags 默认值为w，如果你想修改一个文件，而不是取代它需要把flags改成 R+。
// ********************************
// 
// 


var writeStream = fs.createReadStream('./dataStream');
console.dir(writeStream);