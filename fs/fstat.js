var fs = require('fs');

// ******************************
// 方法说明： 
//    根据文件描述符获取文件信息。
//    语法：
//    fs.fstat(fd, [callback(err, stats)])
//    由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
//    接收参数：
//        fd                 文件描述符
//        callback       回调，传递2个参数，异常参数err 和 文件信息参数 stats
//        stats包含以下信息：(以下信息为案例中读取的文件信息，非默认值)
//        {
//            dev : 0 ,
//            mode : 33206 ,
//            nlink : 1 ,
//            uid : 0 ,
//            gid : 0 ,
//            rdev : 0 ,
//            ino : 0 ,
//            size : 378(字节) ,
//            atime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间> ,
//            mtime : Tue Jun 13 2014 09:48:31 GMT +0800 <中国标准时间> ,
//            ctime : Tue Jun 10 2014 13:57:13 GMT +0800 <中国标准时间>
//        }
// 
// 
// 
// ******************************
// 
    fs.open('./datatest.txt', 'a', function(err, fd){
        if(err){
            throw err;
        }
        fs.fstat(fd, function(err, stats){
            if(err){
                throw err;
            }
            console.dir(stats);
        });
    });


    // fs.fstatSync(fd)