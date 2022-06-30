
const express = require("express");
const app = express();

app.get("/",function(request,response){      // here the forward slash is the root for the server, it send a request to fetch the data
    response.send("<h1>Hello, World.</h1>")
});

app.listen(3000,function(){
    console.log("Server is running on port 3000"); //here the 3000 is the local port address and it is setting the server on it.
})