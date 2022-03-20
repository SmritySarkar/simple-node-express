const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

// use of middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Hello dude, Smrity you have come so far. Make a little more effort and you will be gifted by god soon. keep trust on him. Life is beautiful and god also so never loose hope on him..");
})

const users=[
    {'id':0, 'name': 'Shabana', 'email':'shabana@gmail.com', 'phone':'01788888888'},
    {'id':1, 'name': 'Shabnur', 'email':'shabnur@gmail.com', 'phone':'01786888808'},
    {'id':2, 'name': 'Bobita', 'email':'bobita@gmail.com', 'phone':'01788800888'},
    {'id':3, 'name': 'Shrabonti', 'email':'shrabonti@gmail.com', 'phone':'01788678888'},
    {'id':4, 'name': 'Suchorita', 'email':'suchorita@gmail.com', 'phone':'01738888888'},
    {'id':5, 'name': 'Susmita', 'email':'susmita@gmail.com', 'phone':'01788888568'},
]

app.get('/users', (req, res)=>{
    // use query parameter
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
});

//app method 

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting the post", req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits',(req, res)=>{
    res.send(['Mangoes', 'Oranges', 'Bananas', 'Apples']);
});

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send("Yummy Yummy tok marka fazli");
});

app.listen(port, ()=>{
    console.log("We are listening your port", port);
});