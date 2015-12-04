var fs = require('fs');

fs.watch('./datatest', function(event, filename){
    console.dir(event);
    console.dir(filename);
});