import {Section,SPA, text} from "ziko"
__Ziko__.__Config__.default.target = document.body
const main=Section()
const p1=Section()
const p2=Section()
let S=SPA(
   main,{
    "/":text("Hi"),
     "/page1":text("p1"),
     "/page2":text("p2")
})