let x=3;
x=x*4*100;
console.log('the result: ', x);

const express=require('express');
const app=express();
let y=[
      Math.floor(Math.random()*10),
      Math.floor(Math.random()*10),
      Math.floor(Math.random()*10),
      Math.floor(Math.random()*10),
      Math.floor(Math.random()*10)];
y=y.sort();
console.log(y);
app.get('/',(req,res)=>{
    res.send(y.toString());
    res.end();
})


function myPromise(num1,num2){
    let p=new Promise((res,rej)=>{
       if((num1+num2)>0){
           res("success!");
       }
       else rej("failure");
    })
    return p;
}
myPromise(-7,-3).then(data=>{console.log(data);})
.catch(err=>{console.log(err);});

//CB function
setTimeout(function(){
    console.log('settimeout');
},2000);

//modules

var fs=require('fs');
app.get('/getcoins',(req,res)=>{
    fs.readFile('coinsHTML.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log(err);
        res.end();
      });
})
app.get('/getmytext',(req,res)=>{
    fs.writeFile('mytext.js',"console.log('hello this is my text!');",function(err){
        if (err) console.log(err);
        res.send("success!!!");
    })
    
})
app.get('/updatemytext',(req,res)=>{
    fs.appendFile('mytext.js',"console.log('not too bad');",function(err){
      if(err) console.log(err);
    res.send("updated");
    })
})
app.get('/replacemytext',(req,res)=>{
    fs.writeFile('mytext.js',"console.log('my replaced text');",function(err){
        if (err) console.log(err);
        res.send("text replaced");
    })
})

app.listen(3000,()=>{console.log("listening on port 3000")});
