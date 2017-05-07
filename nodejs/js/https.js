/**
 * Created by admini161015 on 2017/4/22.
 */
var https=require('https');
var fs=require('fs');
var options={
    key:fs.readFileSync('ssh_key,pem'),
    cert:fs.readFileSync('ssh_cert.pem')
};
http.createServer(options,function (res,req) {
    res.writeHead(200);
    res.end('end');
}).listen(8000);