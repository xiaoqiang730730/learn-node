var fs = require('fs');

// 方法说明： 
//     更改文件所有权（不解析符号链接）
// 语法：
//     fs.lchown(path, uid, gid, [callback(err)])
//     由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//     path          目录路径
//     uid            用户ID
//     gid            群体身份 (指共享资源系统使用者的身份)
//     callback    回调 ，传递异常参数 err
//     
//     

fs.chown(path, uid, gid, function(args){
    // body
});

// fs.chownSync(path, uid, gid);