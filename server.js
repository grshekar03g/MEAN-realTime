let express=require("express");
let app=express();


let bodyparser=require("body-parser");
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

let cors=require("cors");
app.use(cors());

app.use("/fetch",require("./getAllEmployee/getAllEmployee"))
app.use("/insert",require("./addEmployee/addEmployee"))
app.use("/update",require("./updateEmployee/updateEmployee"))
app.use("/delete",require("./deleteEmployee/deleteEmployee"))

// app.listen(8080);

// console.log("sever listening port no 8080.....");

const port=process.env.PORT || 8080;
app.listen(port);
console.log(`server listeing the port no ${port}`)

// app.listen(port,()=>{
//     console.log(`server listening port no ${port}`)
// })