const http = require("http")


const server = http.createServer((req, res) => {
url = req.url
if (url === '/') {
    
}
 res.setHeader('Content-Type', 'text/html')
 res.write('<html>')
 res.write('<head><title>Hello</title></head>')
 res.write('<body><h1>Hello!!</h1></body>')
 res.write('</html>')
 res.end()
})

server.listen(3000)