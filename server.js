
var fs = require('fs')
var http = require('http')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请输入端口号')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query

  if (pathNoQuery === '/') {
    var str = fs.readFileSync('./index.html', 'utf8')
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.end(str)
  } else if (pathNoQuery === '/main.js') {
    var str = fs.readFileSync('./main.js', 'utf8')
    response.setHeader('content-Type', 'text/javascript')
    response.end(str)
  } else if (pathNoQuery === '/xxx') {
    response.statusCode = 200
    response.setHeader('content-Type', 'text/json;charset=utf-8')
    response.end(`
    {
      "note":{
        "to": "A",
        "from": "B",
        "heading": "打招呼",
        "content": "hi"
      }
    }
    `)
  } else {
    response.statusCode = 404
    response.end()
  }

})

server.listen(port)
console.log('监听' + port + '成功')