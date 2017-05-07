/**
 * Created by admini161015 on 2017/4/21.
 */
var  http  =  require('http');
var url=require('url');
var cheerio=require('cheerio');
var Promise=require('Promise');
function getPageAsync(url) {
    return new Promise(function (resolve,reject) {
        console.log('...'+url)
        http.get('http://www.imooc.com/',function (response) {
            var html='';
            response.on('data',function (data) {
                html+=data;
            });
            response.on('end',function () {
                // var re=/<[^<>]+>|\w+/g;
                // html=html.replace(re,'');
                resolve(html)
                filter(html);

            })
        }).on('error',function (error) {
            reject(error)
            console.log(error);
        })
    })
}
/*
function filter(html) {
    var $=cheerio.load(html);
    var group=$('.group');
    group.each(function () {
        console.log($(this).text());
    });
}
http.get('http://www.imooc.com/',function (response) {
    var html='';
    response.on('data',function (data) {
        html+=data;
    });
    response.on('end',function () {
        // var re=/<[^<>]+>|\w+/g;
        // html=html.replace(re,'');
        filter(html);

    })
}).on('error',function (error) {
    console.log(error);
})
*/
