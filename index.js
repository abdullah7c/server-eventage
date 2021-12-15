const express = require("express");
const app = express();
const db = require("./models")
var cors = require('cors')

const { Users } = require("./models")

const port = 5000;

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});


app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});


// app.post("/addUser", async(req, res) => {

//   try {
//     await Users.create({username:"name", password:"123", type:"Admin"})
//     res.send('User Created');
//     //res.send("Requet Recieved")
//   } catch (error) {
//     res.send(error)
//   }
// });

// app.get("/getUser", async(req, res) => {

//   try {
//     const result = await Users.findAll({where:{username:'name'}})
//     res.send(result);

//   } catch (error) {
//     res.send(error)
//   }
// });


// Listen on port 5000
db.sequelize.sync().then((req)=>{
  app.listen(port, ()=>{
      console.log(`Server Running on port ${port}`)
  })
})

