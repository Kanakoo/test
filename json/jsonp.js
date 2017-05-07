/**
 * Created by admini161015 on 2017/4/24.
 */
var  http  =  require('http');
var url=require('url');
var querystring=require('querystring');
http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var query = url.parse(req.url,true).query.cb;
    console.log(query);
    res.write('abc');
    res.end(query+'()');
    /*var qs = querystring.parse(req.url.split('?')[1]);
    if(qs.cb) {
        res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
        var data = {
            "name": "Monkey"
        };
        data = JSON.stringify(data);
        var cb = qs.cb + '(' + data + ');';
        res.end(cb);
    }*/
}).listen(8080)