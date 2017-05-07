/**
 * Created by admini161015 on 2017/4/24.
 */
var fs=require('fs')
//var source=fs.readFileSync('../../source/pic1.jpg','base64')
//console.log(source)
//fs.writeFileSync('./pic1.jpg',source)不行？
//var n=0;
var readStream=fs.createReadStream('../../source/pic1.jpg')
var writestream=fs.createWriteStream('pic1-1.jpg')
readStream.on('data',function(chunk){
    if(writestream.write(chunk)===false){
        readStream.pause()
    }
    //console.log(Buffer.isBuffer(chunk))
    //console.log(chunk.toString())
    /*n++;
    readStream.pause();
    console.log('pause')
    setTimeout(function () {
        console.log('pause end')
        readStream.resume()
    },1000)*/
})
    .on('readable',function () {
    console.log('readable')
    })
    .on('end',function () {
        writestream.end()
       // console.log('end'+n)
    })
    .on('close',function () {
        console.log('close')
    })
    .on('error',function (e) {
        console.log('error:'+e)
    })
writestream.on('drain',function () {
    readStream.resume()
})