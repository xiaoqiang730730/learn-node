var fs = require('fs');
//***************************
// filename      (String)            文件名称

// data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。

// options        (Object)           option数组对象，包含：
//     encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
//     mode       (Number)        文件读写权限，默认值 438
//     flag       (String)            默认值 ‘w’
// callback {Function}  回调，传递一个异常参数err。
//
//
//**************************


var data = 'a';

// 将datatest.txt 里面的内容重置
fs.writeFile('./datatest.txt', data, function(args){
    if(args){
        throw args;
    }else{
        console.log('success');
    }
});

// fs.writeFileSync(filename, data, [options])