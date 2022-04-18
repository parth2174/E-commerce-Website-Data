<<<<<<< HEAD
let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res) => {
    fs.readFile('Categories.json','utf-8',(err,data) => {
        if(err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(8970, () => {
    console.log(`Server is running on port 8970`)
=======
let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res) => {
    fs.readFile('Categories.json','utf-8',(err,data) => {
        if(err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(8970, () => {
    console.log(`Server is running on port 8970`)
>>>>>>> 513776ab767e6c3e6ea393405e2ead41e18d5698
})