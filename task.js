let data=JSON.parse(localStorage.getItem("Calendly_Events"))||[]

function storedata(){
let eventname=document.getElementById("eventName").value
let location=document.getElementById("location").value
let description=document.getElementById("description").value
let eventlink=document.getElementById("link").value
let duration=document.getElementById("duration").value

let s1={
eventname,
location,
description,
eventlink,
duration
}


data.push(s1)


console.log(data)

localStorage.setItem("Calendly_Events",JSON.stringify(data))

window.location.href="dasboard.html"
}