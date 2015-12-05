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
//       encoding: null,
//       fd: null,
//       mode: 0666,
//       autoClose: true
//     }
//   options 可以通过start 和 end 设置 文件 可读取的字节数范围，而不是读取整个文件。 

// 如果start 和 end都被包含的情况下 ，将从0开始。

// encodeing 可以是 ‘utf8′, ‘ascii’, 或 ‘base64′三种格式。

// 如果autoClose为false时，文件描述符将不会被关闭，即使他们报错了。

// 最好把它关闭掉 并确保不会出现文件描述符泄漏。

// 如果autoClose为true时(默认的行为)，对错误或结束的文件描述符将自动关闭。
// ********************************
// 
// 


var createReadStream = fs.createReadStream('./dataStream');
console.dir(createReadStream);