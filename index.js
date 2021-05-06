const http = require('http')

const server = http.createServer()

const PORT = 3001 || process.env.PORT
server.listen(PORT, () => console.log(`server started running at port ${PORT}`))

