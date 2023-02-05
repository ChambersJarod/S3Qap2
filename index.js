const http = require('http');
const fs = require('fs');
const port = 3000;
const events = require('events');

const event = new events.EventEmitter();

event.on("errorFunc",function(message){
    console.log(message)
})

const server = http.createServer(function(req, res){
    let path = "./views/"
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' })
    switch(req.url) {
        case '/':
            fs.readFile(path+'index.html', function(error, data) {
                if (error) {
                    event.emit("errorFunc","there was an error finding index.html")
                    res.writeHead(404)
                    res.write('Error: Index File Not Found')
                } else {
                    res.write(data)
                    console.log('index page shown')
                }
                res.end()
            })
            break;
        case '/about':
            fs.readFile(path+'about.html', function(error, data) {
                if (error) {
                    event.emit("errorFunc","there was an error finding about.html")
                    res.writeHead(404)
                    res.write('Error: Index File Not Found')
                } else {
                    res.write(data)
                    console.log('about page shown')
                }
                res.end()
            })
            break;
        case '/contact':
            fs.readFile(path+'contact.html', function(error, data) {
                if (error) {
                    event.emit("errorFunc","there was an error finding contact.html")
                    res.writeHead(404)
                    res.write('Error: Contact File Not Found')
                } else {
                    res.write(data)
                    console.log('contact page shown')
                }
                res.end()

            })
            break;
        case '/products':
            fs.readFile(path+'products.html', function(error, data) {
                if (error) {
                    event.emit("errorFunc","there was an error finding products.html")
                    res.writeHead(404)
                    res.write('Error: Products File Not Found')
                } else {
                    res.write(data)
                    console.log('products page shown')
                }
                res.end()
            })
            break;
        case '/subscribe':
            fs.readFile(path+'subscribe.html', function(error, data) {
                if (error) {
                    event.emit("errorFunc","there was an error finding subscribe.html")
                    res.writeHead(404)
                    res.write('Error: Subscribe File Not Found')
                } else {
                    res.write(data)
                    console.log('subscribe page shown')
                }
                res.end()
            })
            break;
    } 
})

server.listen(port, function(error){
    if (error) {
        console.log('something went wrong', error)
    }else {
        console.log('server is listening on port ' + port)
    }
})