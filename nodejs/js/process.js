/**
 * Created by admini161015 on 2017/4/25.
 */
//开启输入流
process.stdin.resume()
process.stdout.write('请输入：')

process.stdin.on('data',function (chunk) {
  console.log(chunk.toString())
})