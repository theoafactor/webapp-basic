const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);


const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT  || 3000;


// server route
server.post("/register", async (request, response) => {

    console.log(request.body)

    // let fullname = request.body.fullname;
    // let email = request.body.email;
    // let age = request.body.age;
    // let country = request.body.country;
    // let note = request.body.note;

    // console.log("Fullname --> ", fullname);

    await client.db(process.env.DBNAME).collection("users").insertOne(request.body);

    response.send('User registered');


})


server.post("/login", (request, response) => {


}); 


server.delete("/delete_account", (request, response) => {



});


server.get("/retrieve_users", async (request, response) => {

    let data = await client.db(process.env.DBNAME).collection("users").find({}).toArray()

    response.send(data);

})


server.delete("/clear_users", async (request, response) => {

    let result = await client.db(process.env.DBNAME).collection("users").deleteMany({})

    if(result){
        response.send('Users deleted successfully');
    }else{
        response.send('Failed to delete users');
    }
})


server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))