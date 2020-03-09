const http = require('http')
const server = http.createServer((req,res) => {
  console.log('New connection')
  res.end('Hello Moreesindo')
})
const PORT =process.env.PORT || 80880
server.listen(PORT, () => console.log('Listening'))
