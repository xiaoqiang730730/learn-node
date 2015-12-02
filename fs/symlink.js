var fs = require('fs');

//************************
//方法说明： 
//   创建符号链接。
// 语法
//   fs.symlink(srcpath, dstpath, [type], [callback(err)])
//   由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//   srcpath                 为源目录或文件的路径
//   dstpath                它是存放转换后的目录的路径，默认为当前工作目录
//   type                      默认值：’file’ ， 可选值 ‘dir’, ‘file’, 或者 ‘junction’ ，该项仅用于Windows（在其他平台上忽略）。
//   注意Windows结点需要转换后的目录是绝对路径，使用“junction”时，目标参数将自动被归一化到的绝对路径。
//   callback               回调，传递一个异常参数err
//************************