//server example using Node.js
const http = require('http')
const url = require('url');
const server = http.createServer((req, res) =>{
    let parseurl = require('url').parse(req.url, true);
    let path = parseurl.pathname;
    let query = parseurl.query;
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server running on port 5432');
    }
    else if(path === '/home'){
        res.setHeader('Content-Type', 'text/html');
        res.end('This is the about page');
    }
    else if (path ==='/login'){
        let dbuser ={
            username: 'admin',
            password: 'admin123'
        }
        res.setHeader('Content-Type', 'text/html')
        console.log(query,dbuser);
        if(dbuser.username !== query.username && dbuser.password !== query.password){
            res.statusCode =400
            res.end('<h1>Login failed</h1>');
        }else{
            res.end(`<h1>Login successful ,welcome ${query.username}</h1>`);
        }
    }
        
        
    else{
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
        
});
server.listen(5432, () => {
    console.log('Server is running on port 5432');
});