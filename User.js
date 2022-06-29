const express = require("express");
const app = express();
const router = express.Router()
const data = require('./DataBases');
app.use(express.json());


router.post(`/user`,(req,res) =>{
    const newdata =req.body
   data.tableDatabase.push(newdata)
    res.send(data.tableDatabase)
});

router.get(`/userdetail`,(req,res)=>{
    res.send(data.tableDatabase);
   
});

module.exports = router;