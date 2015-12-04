var fs = require('fs');

// *************************
// 方法说明： 
//      根据指定的文件描述符fd来读取文件数据并写入buffer指向的缓冲区对象。相对于readFile提供了更底层的接口。
//      一般情况下不建议使用这种方式来读取文件，因为它要求你手动管理缓冲区和文件指针，尤其是在 你不知道文件大小的时候，这将会是一件很麻烦的事情。
// 语法：
//      fs.read(fd,buffer,offset,length,position,[callback(err,bytesRead,buffer)])
//      由于该方法属于fs模块，使用前需要引入fs模块（var fs= require(“fs”) ）
// 接收参数：
//      fs             文件描述符
//      buffer      缓冲区，数据将被写入。
//      offset      buffer写入的偏移量
//      length     （integer）   指定文件读取字节数长度
//      position   （integer）   指定文件读取的起始位置，如果该项为null，将从当前文件指针的位置开始读取数据。
//      callback      回调传递了三个参数，err， bytesRead， buffer
//          · err  异常
//          · bytesRead:读取的字节数
//          · buffer:缓冲区对象
// ************************
// 
// 

fs.open('./datatest.txt', 'r', function(err, fd){ //以读取模式打开文件
    if(err){
        throw err;
    }
    var buf = new Buffer(8);
    fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer){
        if(err){
            throw err;
        }
        console.log(bytesRead);
        console.log(buffer);
        console.log(buf);
    });
});

// fs.readSync(fd, buffer, offset, length, position)