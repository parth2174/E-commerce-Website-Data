<<<<<<< HEAD
let http = require('http');

// req > what we will pass to server
// res > what server will give us back

let server = http.createServer((req,res) => {
    res.write('<h1>First Server with NodeJs App</h1>');
    res.end();
})

=======
let http = require('http');

// req > what we will pass to server
// res > what server will give us back

let server = http.createServer((req,res) => {
    res.write('<h1>First Server with NodeJs App</h1>');
    res.end();
})

>>>>>>> 513776ab767e6c3e6ea393405e2ead41e18d5698
server.listen(7600)