const express = require("express");
const app = express();
const router = express.Router()
const data = require('./DataBases');
app.use(express.json());
router.post(`/datas`,(req,res) =>{
    const newdata =req.body.datas
    const username = req.body.name
    newdata.duration = dur(newdata.slept,newdata.wake)
    console.log(newdata)
    // console.log(newdata)
    // console.log(username)
    const index = data.tableDatabase.findIndex((datas)=>{
        return datas.hasOwnProperty(username)
        
        
    })
    // console.log(index)
    if(index === -1){
        const singleData = {}
        singleData[username]=[]
        // console.log(singleData)
        singleData[username].push(newdata)
        // console.log(singleData)
        data.tableDatabase.push(singleData)
        // console.log(data.tableDatabase)
    }else{
        const temp = data.tableDatabase[index]
        temp[username].push(newdata)
        // console.log(data.tableDatabase)
        res.send(temp[username])
    }
//     const index = data.tableDatabase.findIndex((datas)=>{
//         return datas.hasOwnProperty(username);
//     if (index === -1){

//     }


//    data.tableDatabase.push(newdata)
//     res.send(data.tableDatabase)
});

router.get(`/details`,(req,res)=>{
    const username = req.query.name;
    const index = data.tableDatabase.findIndex((datas)=>{
        return datas.hasOwnProperty(username);
        
    })
    // console.log(index)
    // console.log(username)
    if(index!=-1){
        temp = data.tableDatabase[index]
        res.send(temp[username])
        // console.log(temp[username])
    }
    
    
    
   
});
const min =(time)=>{
    const part = time.split(":")
    console.log(part)
    const cal = ((part[0]*60)+(part[1]*1))
    console.log(cal)
    return cal
}
const dur = (sleep,woke)=>{
    const cal = (1440- min(sleep))+min(woke)
    return cal/60
    
} 

module.exports = router;