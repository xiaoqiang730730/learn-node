var fs = require('fs');

//****************************
// 1 fs.write(fd, buffer, offset, length[, position], [callback(err, bytesWritten, buffer)])
// fd     文件描述符。
// buffer      缓冲区，数据将被写入。buffer尺寸的大小设置最好是8的倍数，效率较高。
// offset      buffer写入的偏移量
// length     （integer）   指定文件读取字节数长度
// position   （integer）   指定文件读取的起始位置，如果该项为null，将从当前文件指针的位置开始读取数据。
// callback      回调传递了三个参数，err， bytesRead， buffer
//    err  异常
//    bytesRead:读取的字节数
//    buffer:缓冲区对象
// 
// 2 fs.write(fd, data[, position[, encoding]], [callback(err, written, string)])
// encoding     字符编码
// callback
//     err            异常
//     written     指定多少字符数将被写入到文件。
//     string       返回的Buffer 
// 
// 
//
//***************************
//
//
//
    
    // 第一种方式
    // fs.open('./datatest.txt', 'a', function(err, fd){
    //     if(err){
    //         throw err;
    //     }
    //     var buf = new Buffer('11111111', "utf-8"); //buffer尺寸的大小设置最好是8的倍数，效率较高
    //     fs.write(fd, buf, 0, 8, 0, function(err, bytesWritten, buffer){
    //         if(err){
    //             throw err;
    //         }
    //         console.log(bytesWritten);
    //         console.log(buffer);
    //         fs.close(fd, function(err){
    //             if(err){
    //                 throw err;
    //             }
    //             console.log('closed');
    //         });
    //     });
    // });
    // 
    // fs.open('./datatest.txt', 'a', function(err, fd){
    //     var buf = new Buffer('12345678', 'utf-8');
    //     console.log(buf);
    //     fs.writeSync(fd, buf, 0, 8, 0);
    //     fs.closeSync(fd);
    // });
    
    // 第二种方式
    // var fd = fs.openSync('./datatest.txt', 'a');
    // var data = '333';
    // fs.write(fd, data, null, 'utf-8', function(err, written, string){
    //     if(err){
    //         throw err;
    //     }
    //     console.log(written); // 字符数
    //     console.log(string);
    // });
    
    var fs = require('fs');
    fs.open('./datatest.txt', 'a', function(err,fd){
     if(err){
      throw err;
     }
     var data = '123123123 hello world';
     fs.write(fd, data, 0 , 'utf-8', function(err, written, string){
      if(err){
       throw err;
      }
      console.log(written);
      console.log(string);
     
      fs.close(fd,function(err){
       if(err){
        throw err;
       }
       console.log('file closed');
      });
     });
    });