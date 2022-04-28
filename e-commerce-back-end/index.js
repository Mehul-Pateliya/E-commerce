const express = require('express');

const app = express()
app.get('/',(req,res)=>{
    const form = JSON.parse(req.body);
    res.json({
        authenticated : true
    })
    
})


app.listen(3000);