var  fs = require('fs');

// error 回调
// 执行错误的时候会出现 error对象
// 
// **********************
//  更改文件名
// **********************

console.log('num' + 0);
fs.rename('./data.js', './datatest.js', function(error){ // 这个callback 类似setTimeout
    if(!error){ 
        console.log('rename complated');
    }else{
        throw error;
    }
    console.log('num' + 1);
});

console.log('num' + 2);
var t = fs.renameSync('./datatest.js', './data.js');
if(t){
    throw t;
}
console.log('num' + 3);