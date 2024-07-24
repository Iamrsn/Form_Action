const express=require('express');
const app=express();

const userModel=require('./usermodel')

app.get('/',function(req,res){
    res.send("run")
})

app.get('/create',async (req,res)=>{
   let createdUser=await userModel.create({
        name:"roshani",
        username:"roshanikr",
        email:"roshankr9894@gmail.com"
    })

    res.send(createdUser)
})

app.get('/update',async (req,res)=>{
    let updatedUser=await userModel.findOneAndUpdate({username:"roshankr"},{name:"roshan kumar"},{new:true});
     res.send(updatedUser);
 })

 app.get('/read',async (req,res)=>{
    let Users=await userModel.find({name:"roshani"});
     res.send(Users);
 })
 //find ke aandar kuch ni dege to wo sbka read kr lega or find ke andar kuch de die to wo particular uska hi read krega... find hardam array deta or findOne use krne se koi user ni hai to hame null milega

 app.get('/delete',async (req,res)=>{
    let DelUsers=await userModel.findOneAndDelete({name:"roshani"});
     res.send(DelUsers);
 })

app.listen(3000);