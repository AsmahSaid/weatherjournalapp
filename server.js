

const express=require('express')

const app=express()

let serverData={}

app.use(express.static('frontend'))
app.use(express.json())

app.listen(8000,()=>{
    console.log('the server is ready..')
})

app.post('/saveData', (req, res)=>{
 serverData=req.body
 res.json({msg:'already done'})
})

app.get('/getData', (req,res)=>{
res.json(serverData)
})