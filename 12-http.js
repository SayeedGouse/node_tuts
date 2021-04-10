const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200)
    res.end('hello home page')
  }
  if (req.url === '/about') {
    res.end('this is a about page')
  }
  res.write(`<h1>Oops</h1>
        <a href="/">go back to hom</a>
    `)
})
server.listen(4000)
