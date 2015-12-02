var fs = require('fs');

//*****************************
// 方法说明： 
//     获取文件信息。
// 语法：
//     fs.stat(path, [callback(err, stats)])
//     由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）\
// 接收参数：
//     path   文件路径
//     callback  回调，传递两个参数，异常参数err, 文件信息数组 stats
//     stats包含以下信息：(以下信息为案例中读取的文件信息，非默认值)
//*****************************
//


fs.stat('./datatest.txt', function(err, stats){
    if(err){
        throw err;
    }
    console.dir(stats);
});

// fs.statSync(path)