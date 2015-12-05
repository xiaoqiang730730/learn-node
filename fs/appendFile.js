var fs = require('fs');

// 方法说明：
// 
// 该方法以异步的方式将 data 插入到文件里，如果文件不存在会自动创建。data可以是任意字符串或者缓存。
// 
// 语法：
// 
// fs.appendFile(filename, data, [options], callback)
// 
// 由于该方法属于fs模块，使用前需要引入fs模块（var fs = require(“fs”) ）
// 
// 接收参数：
// 
// 1. filename {String}
// 
// 2. data {String | Buffer}
// 
// 3. options {Object}
// 
//       encoding {String | Null} default = ‘utf8′
// 
//       mode {Number} default = 438 (aka 0666 in Octal)
// 
//       flag {String} default = ‘a’
// 
// 4. callback {Function}
// 
// 
fs.appendFile('./datatest.txt', '22222222', function(err){
    if(err){
        throw err;
    }
    console.log('success');
});

// fs.appendFileSync(filename, data, [options])