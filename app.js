
const express = require('express')
const translate = require('@iamtraction/google-translate');
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.post('/api/translator',(req,res)=>{
    console.log(req.body);
    translate(req.body.text, { from: req.body.from, to: req.body.to })
    .then(data => {
        // console.log(data);
        return res.json(data)
    }).catch(err => {
        console.error(err);
        res.end({}).status(500)
    });
})

app.listen(5000,()=>{console.log("server listen on 5000");})