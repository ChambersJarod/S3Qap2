//my requirements
const http = require('http');
const fs = require('fs');
const port = 3000;
const events = require('events');

//starting my event emitter
const event = new events.EventEmitter();

//creating the function for my event emitter
event.on("errorFunc",function(message){
    console.log(message)
})

//creating the server
const server = http.createServer(function(req, res){
    //making the path to my pages a variable
    let path = "./views/"
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' })
    //starting my switch
    switch(req.url) {
        //labeling the case for the switch
        case '/':
            fs.readFile(path+'index.html', function(error, data) {
                //an if else function to detect errors
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
        //all future 'case' objects are the same as the first one considering layout
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

//console.logging the port the server is connected to and giving an error if it does not connect
server.listen(port, function(error){
    if (error) {
        console.log('something went wrong', error)
    }else {
        console.log('server is listening on port ' + port)
    }
})