const express = require("express");
const app = express();
app.use(express.json());


const tableDatabase=[{akash:[{date:'05/11/2020',slept:'11:50',wake:'17:20',duration:'5'},
{date:'07/11/2020',slept:'11:50',wake:'17:20',duration:'7'},
{date:'06/11/2020',slept:'11:50',wake:'17:20',duration:'3'},
{date:'06/11/2020',slept:'11:50',wake:'17:20',duration:'3'}]},{mani:[
{date:'06/11/2020',slept:'11:50',wake:'17:20',duration:'3'}]}

];
const userDatabase = [{ username: "akash@gmail.com", password:"akash"},
{username: "mani@gmail.com", password:"mani"},
{username: "gopi@gmail.com", password:"gopi"},
{username: "harish@gmail.com", password:"harish"},
{username: "yeshwanth@gmail.com", password:"yesh" }]



module.exports = {userDatabase,tableDatabase};