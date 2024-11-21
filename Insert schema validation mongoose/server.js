const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

let app = express();
app.use(cors());

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    mobileNo: String,
});

let User = new mongoose.model("user", userSchema);
let saveToDB = async ()=>{
   try {
    let anvira = new User({
        firstName:"anvira",
        lastName:"Rammolla",
        email:"potti2gamil.com",
        password:"abcd",
        mobileNo:"999999999"
    })
    
    await anvira.save();
    console.log("Successfully saved to DB");
   } catch (error) {
    console.log("Unable to save to DB ",error);
   }
}


app.listen("9876", () => {
    console.log("Listening to port 9876");
})
let connectToDB = () => {
    try {
        mongoose.connect("mongodb+srv://satthurikranthi:anvira@cluster0.q79l2.mongodb.net/");
        console.log("Succesfully connected to DataBase");
        saveToDB();
    } catch (error) {
        console.log("Unable to connect to DataBase");
    }
}

connectToDB();