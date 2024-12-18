const express = require('express')
const app = express()
app.use(express.json())
//stitching routes to server


require('./routes/ideas.route')(app)

app.listen(8000,()=>{
    console.log("Server started at port number ",8000);
    
})