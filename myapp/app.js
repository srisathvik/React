const express = require('express')
const {writeFileSync} = require("fs");
const { json } = require('stream/consumers');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const data = require("./dataBase.json");
    // console.log(data);
    res.send("server running...")
})
app.get('/tasks', (req, res) => {
    const data = require("./dataBase.json");
    // console.log(data);
    res.json(data)
})
app.get('/write', (req, res) => {
    const data = require("./dataBase.json");
    let newF = {...data, newf: "new data"};
    try{
        writeFileSync("./dataBase.json", JSON.stringify(newF, null, 2), "utf8");
    }
    catch(err){
        console.log(err);
    }
    // console.log(data);
    res.json(data)
})
app.get('/another', (req, res) => {
  res.json({text: "j"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})