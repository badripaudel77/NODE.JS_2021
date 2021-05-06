const http = require('http')
const fs = require('fs')

const server  = http.createServer((req,res) =>{
    let path = './views/'
    switch(req.url) {
        case '/' : 
        path += 'index.html'
        break
        //redirect to / if someone hits /home
        case '/home' : 
        res.writeHead(302, {
            'Location': '/'
          })
        res.end();
        break
        default :
        path += 'pagenotfound.html'
        break
    }
    fs.readFile(path, (err, data) => {
        if(err) {
            res.end()
        }
        else {
            res.end(data)
        }
    })
})

const PORT =  3001 || process.env.PORT
server.listen(PORT, () => console.log("Server is running at port "+ PORT))