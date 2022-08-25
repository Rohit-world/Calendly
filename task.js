let data=JSON.parse(localStorage.getItem("Calendly_Events"))||[]

function storedata(){
   
let eventname=document.getElementById("eventName").value
let location=document.getElementById("location").value
let description=document.getElementById("description").value
let eventlink=document.getElementById("link").value
let duration=document.getElementById("duration").value
if( eventname=="" || location==""|| description==""||duration==""){
    alert("please fill all the fields")

   

}
else{
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
}




function dashboardbutton(){
    window.location.href="dashboard.html"
}