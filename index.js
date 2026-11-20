import express from 'express'

const app = express();

app.get('/home',(req,res)=>{
return res.send('Hello')
})
app.listen(3000,()=>{
    console.log('Server is running')
})