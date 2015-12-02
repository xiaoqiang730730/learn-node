var fs = require('fs');
//*************
//  同步磁盘缓存
//接收参数：

// fd  文件描述符
// callback     回调，传递一个异常参数err
//***************
//


fs.open('./datatest.txt', 'a', function(err,fd){
 if(err){
  throw err;
 }
 console.log('file open');
 fs.fsync(fd, function(err){
  if(err){
   throw err;
  }
  console.log('done');
  fs.close(fd,function(err){
   if(err){
    throw err;
   }
   console.log('file closed');
  });
 });
});