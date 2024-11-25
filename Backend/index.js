const express = require("express")
const app = express()
const cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use((req,res,next)=>{
  next()
})

app.get("/",(req,res)=>{
      res.send("hello")
})

app.post('/data',(req,res)=>{
      console.log(req.body)
      res.send("recieved")
})

app.get("/notify",(req,res)=>{
  const obj = {
    notification : 102,
    job : 0,
    network : 12 ,
    message : 20
  }
  res.json(obj).status(200)
})


app.listen(3000,()=>{
  console.log("Backend running ! ")
})