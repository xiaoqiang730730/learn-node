var fs = require('fs');

//  方法说明:
//      以异步的方式创建文件目录。如果目录已存在，将抛出异常。
//  语法：
//      fs.mkdir(path, [mode], [callback(err)])
//      由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
//  接收参数：
//      path  将创建的目录路径
//      mode          目录权限（读写权限），默认0777
//      callback   回调，回调函数传递一个err异常参数。
//      

fs.mkdir('test', 0777, function(err){
    if(err){
        throw err;
    }
    console.log('success');
});

// fs.mkdirSync(path, [mode])