const express = require("express");
const app = express();

app.use(express.json());

// const userData = require(`./User`)
const tableData = require(`./Table`)
const signUp = require(`./SignUp`)

// app.use(`/User`,userData)
app.use(`/Table`,tableData);
app.use(`/SignUp`,signUp);




const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
