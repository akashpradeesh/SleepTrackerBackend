const express = require("express");
const app = express();
const router = express.Router()
const data = require('./DataBases');
app.use(express.json());

const newdat = {date:'',slept:'',wake:''}
router.post(`/detail`,(req,res) =>{
    const newdata =req.body
   data.userDatabase.push(newdata)
    res.send(data.userDatabase)
    data.tableDatabase.push(newdat)
    // console.log(data.userDatabase)
    
});

router.get(`/Signup`,(req,res)=>{
    res.send(data.userDatabase);
   
});

module.exports = router;