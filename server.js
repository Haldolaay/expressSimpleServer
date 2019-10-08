const express = require("express");
const app = express();

const server = app.listen(4000,listening);
function listening(){
console.log("hello");
};
app.use(express.static('jumpForce'));