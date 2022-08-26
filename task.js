let data=JSON.parse(localStorage.getItem("Calendly_Events"))||[]

function storedata(){
   
let eventname=document.getElementById("eventName").value
let location=document.getElementById("location").value
let description=document.getElementById("description").value
let date=document.getElementById("date").value
let duration=document.getElementById("duration").value
if( eventname=="" || location=="none"|| description==""||duration=="none" ||date==""){
    alert("please fill all the fields")

   

}
else{
    let s1={
        eventname,
        location,
        description,
        date,
        duration
        }
        
     
        data.push(s1)
        
        
        console.log(data)
        
        localStorage.setItem("Calendly_Events",JSON.stringify(data))
        
    
        window.location.href="dashboard.html"
       
}
}




function dashboardbutton(){
    window.location.href="dashboard.html"
}