# back-end-ExpressJS-all-get-post-middleware

const express =  require('express'); 
const port = 8000;
const users = require('./users.json');

// if use local middleware

function logger(req,res, next){
    console.log(`calling ${req.method} to ${req.url}`);
    next();
    console.log(`calling ${req.method} to ${req.url} sucessfully`)
}


let app = express();


// use middle ware in backend  use is middleware

// app.use(function logger(req, res, next) {
//     console.log("Before executing the request");
//     next(); // no return is use in meddle ware
//     console.log("After executing the request");
// })

// middle ware by express.json
// This is known as gloobal middle ware
// app.use(express.json());


app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})
// this is how to seanding a file

app.get("/user",(req,res)=>{
    res.sendFile(`${__dirname}/user.html`);
})

// this is how to send a text message
app.get("/text",(req,res)=>{
    res.send(`get the text by user`);
})


// this is how to get data from a json files
// app.get("/users",(req,res)=>{
//     res.json(users);
// })

// get data by id :-
// getting a data from json with path parameeter

app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    console.log(id);
    const user = users.find((user)=>user.id === Number(id));
    console.log(user);
    res.json(user);
})
/// getting a json with query parameters
app.get("/users",(req,res)=>{
    let {first_name, gender}= req.query;
    if(first_name){
        const user = users.find((user)=>user.first_name === first_name && user.gender === gender)
        res.json(user || {});
    }
    else{
        res.json({
            request_from: req.url,
            data: users,
        });

    }
})

// this is for global middleware

// app.post("/users",(req,res)=>{
//     console.log("POST to /users", req.body)
//     users.push(req.body);
//     res.json(req.body); 
// });


// this is for local middle ware 

app.post("/users", [logger,express.json()],(req, res) => {
    console.log("inside post/users")
    users.push(req.body);
    res.json(req.body);
})


app.listen(port,()=>{
    console.log(`Listining at port: ${port}`);
})




