/**
 * Created by admini161015 on 2017/4/24.
 */
var  http  =  require('http');
var url=require('url');
var fs=require('fs')
var Readable=require('stream').Readable
var Writable=require('stream').Writable
var readStream=new Readable
var writeStream=new Writable
readStream.push('I')
readStream.push('Love')
readStream.push('Node')
readStream.push(null)
writeStream._write=function (chunk,encode,cb) {
    console.log(chunk.toString())
    cb()
}
readStream.pipe(writeStream)