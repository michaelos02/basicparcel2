import { fName,doMath } from "./const"
import { alertIt } from "./button"

const moment = require("moment")

const now = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(now)
console.log("Hello JS!!")
console.log(doMath(2))

function changeIt(){
    document.getElementById("time2").innerText = fName;
}

document.addEventListener("DOMContentLoaded",changeIt)
document.getElementById("myBtn").addEventListener("click",alertIt)