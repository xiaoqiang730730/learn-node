var fs = require('fs');

// 方法说明：
// 更改一个文件所提供的文件描述符引用的文件的时间戳。
// 简称 更改时间戳
// 语法：
// fs.futimes(fd, atime, mtime, callback)
// 由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）

// 接收参数：
//  fd             标识符
//  atime
//  mtime
//  callback   回调