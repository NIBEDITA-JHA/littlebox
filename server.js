const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const Post =require("./models/Post")
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3009;

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected!'));



app.get("/",async(req,res)=>{
  const posts = await Post.find({})
  res.json({
    success:true,
    posts: posts
  })
})

app.post("/",async(req, res)=>{
  const {title,summary} = req.body;
  //To Do
  const post = new Post({title,summary})
  await post.save()
  const posts = await Post.find({})
  res.json({
    success:true,
    posts:posts
  })
})

app.put("/:id",async(req,res)=>{
  const id=req.params.id
  const {title,summary} = req.body
  await Post.findByIdAndUpdate(id,{title,summary})
  const posts = await Post.find({})
  

    
  res.json({
      success: true,
      posts:posts,
  })

})

app.delete("/:id", async(req, res)=>{
  const id= req.params.id;
  await Post.findByIdAndDelete(id)
  const posts=await Post.find({})
 
  res.json({
    success:true,
    posts : posts,
  })
})


app.listen(port,()=>{
  console.log(`App started at port ${port}`);
})