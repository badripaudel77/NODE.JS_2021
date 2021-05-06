const http = require('http')

const axios = require('axios')

const server = http.createServer()

const PORT = 3001 || process.env.PORT
server.listen(PORT, () => console.log(`server started running at port ${PORT}`))


const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
    console.log(res.data.map(data => console.log(data.title)));
}

getData()

//run as : node ./demo/networkRequest.js


