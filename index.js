/*

let x = [0,0,1,2,1,3,3,5,5]
let y = [1,1,1,2,2,3,3,4,4,9]

for(let i = 0; i < x.length; i++){
    let counter = 0;
    for(let j = 0; j < y.length; j++){
        if(x[i] == x[j]){
            counter++
        }

    }
    if(counter == 1){
        console.log(x[i])
    }
}

for(let i = 0; i < y.length; i++){
    let counter = 0;
    for(let j = 0; j < y.length; j++){
        if(y[i] == y[j]){
            counter++
        }

    }
    if(counter == 1){
        console.log(y[i])
    }

}

*/



/*setInterval(() => {
    console.log("hello")
}, 2000)

*/

/* let x = 0

let myInterval = setInterval(() => {
    x++
    if(x <= 10){
        console.log("hello")
    }

    else{
        ckearInterval(myInterval)
    }
}, 2000)

*/




const http = require('http') 
const fs = require('fs') // fs = file system

const server = http.createServer((req,res) => {             //req = request , res = response
    //console.log(req.url.toString())

    let myurl = './'
    if(req.url == '/'){
        myurl += 'index.html'
        res.statusCode = 200
    }
    else if(req.url == '/about'){
        myurl += 'about.html'
        res.statusCode = 200
    }
    else{
        myurl += 'error.html'
        res.statusCode = 404
    }

    fs.readFile(myurl, (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            res.write(data)
            res.end()
        }
    })
    
    // res.setHeader("Content-Type", "text/plain")
    //res.setHeader("Content-Type", "text/html")
    // res.write("<p>Hello Nich</p>")
    //res.write("<p>Sanguineo Lifestyle</p>")
    //res.write("<p>Going up</p>")

    
    //res.end()                                               // this one means it's ready to pass. or pwede na siya makita. 
})                                                            //asynchronous function  if meron ang =>, every time naga run ang server naga run ang function 

server.listen(3000, 'localhost', () => {
    console.log("listen")
})






