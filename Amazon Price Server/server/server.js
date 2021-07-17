const express = require('express');
const mongoose = require('mongoose');
var app = express();  
var cors = require('cors'); 
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));



const dbURI = 'mongodb://test1234:pass1234@cluster0-shard-00-00.nqvsp.mongodb.net:27017,cluster0-shard-00-01.nqvsp.mongodb.net:27017,cluster0-shard-00-02.nqvsp.mongodb.net:27017/amazon-price?ssl=true&replicaSet=atlas-x4nb7u-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log("Database is connected"))
.catch((error) => console.log(error));



const port = 3000   

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("got a request!")
})

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
})



// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/products', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
    console.log("test1");
    response.json("yup, received!");
    response.end();
});


// Access the parse results as request.body
app.post('/signup', function(request, response){
  console.log(request.body.user.email);
  console.log(request.body.user.password);
  console.log("Signup data received!")
  response.json("Received!");
  response.end();
});


// Access the parse results as request.body
app.post('/login', function(request, response){
  console.log(request.body.user.email);
  console.log(request.body.user.password);
  console.log("Sign data received!")
  response.json("Received!");
  response.end();
});
