const fs =require("fs");
// fs.writeFile('read.txt','welcome to world',(err) =>{
//     console.log('file is created');
// });


// fs.appendFileSync('read.txt',' how are :',(err) => {
//     console.log('data added');
// });

fs.readFile('read.txt','UTF-8',(err,data) =>{
    console.log(data);
});

