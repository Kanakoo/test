/**
 * Created by admini161015 on 2017/4/18.
 */
var  http  =  require('http');
var url=require('url');
/*
var querystring=require('querystring');
http.createServer(function  (request, response)  {
    response.writeHead(200,  {'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问?
        var path=url.parse(request.url).pathname;
        path=path.replace(/\//,'');
        console.log(path);
    }
    response.end('end');
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');*/
var postdata=querystring.stringify({
    'content':'ceshiyixia',
    'cid':10
});
var options={
    hostname:'www.imooc.com',
    port:80,
    path:'/course/document',
    method:'POST',
    headers:{}
};
var req=http.request(options,function (res) {
    console.log(res.statusCode);
    res.on('data',function (chunk) {
        console.log(Buffer.isBuffer(chunk)+" "+typeof chunk);
    });
    res.on('end',function () {
        console.log('end');
    })
});
req.on('error',function (e) {
    console.log(e.message);
});
req.write(postdata);
req.end();