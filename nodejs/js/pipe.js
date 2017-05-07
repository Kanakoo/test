/**
 * Created by admini161015 on 2017/4/24.
 */
var  http  =  require('http');
var url=require('url');
var fs=require('fs')
var request=require('request')
http.createServer(function (req,res) {
   /* fs.readFile('',function (err,data) {
        if(err){
            res.end();
        }else{
            res.writeHeader(200,{'Content-Type':'text/html'})
            res.end(data)
        }
    })*/
   // fs.createReadStream('').pipe(res)
    request('http://img.mukewang.com/58e46c300001513801000100-200-200.jpg').pipe(res)
    //fs.createReadStream('../../source/pic1.jpg').pipe(fs.createWriteStream('pic1_pipe.jpg'))
    res.end();
}).listen(8000)
