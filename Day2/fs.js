const path =require('path')
const fs =require('fs')

// path module functions:

//console.log(__dirname);
//console.log(__filename);

//console.log(path.basename(__dirname));
//console.log(path.basename(__filename));

//console.log(path.extname(__filename));
//console.log(path.extname(__dirname));

// console.log(path.parse(__dirname));
// console.log(path.parse(__filename));




//file system module functions:

// create the file and writein it :

// fs.writeFile('demo.txt', 'Hello World!', (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// })

//override exist data

//  fs.writeFileSync('demo.txt', 'Hello World! ');
// console.log('file created');

//read the file:

// fs.readFile('demo.txt', 'utf8', (err, text) => {
//     if (err) {
//         throw console.log(err);
//     }
//     console.log(text);
    
// })

// update the file:

// fs.appendFile('demo.txt', ' Welcome to Node.js!', (err) => {
//     if (err) throw err;
//     console.log('File has been updated!');
// })

// delete the file:

// fs.unlink('demo.txt', (err) => {
//     if (err) throw err;
//     console.log('File has been deleted!');
// })

//create  directory:

// fs.mkdir('newdir', (err) => {
//     if (err) throw err;
//     console.log('Directory created!');
// })

//remove directory:

// fs.rmdir('newdir', (err) => {
//     if (err) throw err;
//     console.log('Directory removed!');
// })

// console.log(fs.existsSync('fetch.js')); // check if file exists
