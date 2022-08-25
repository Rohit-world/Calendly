let Calendly_Events = JSON.parse(localStorage.getItem("Calendly_Events")) || [];
let cointainer = document.getElementById("main");
appendData(Calendly_Events);

function appendData(Calendly_Events) {
  cointainer.innerHTML = null;
  Calendly_Events.forEach((Element,index) => {
    let card = document.createElement("div");
    card.id = "card"; //main card div

    let div1 = document.createElement("div"); //div one for delete btn

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //delete btn and function
    let delbtn = document.createElement("img");
    delbtn.id = "delete-btn";
    delbtn.src = "https://img.icons8.com/metro/344/trash.png";
    delbtn.addEventListener("click", function () {
      deleteEvent(index);
    });

    div1.append(checkbox, delbtn);

    let eventname = document.createElement("p");
    eventname.id = "eventname";
    eventname.innerText = Element.eventname;

    let duration = document.createElement("p");
    duration.id = "duration";
    duration.innerText = `${Element.duration} One-on-One`;

    let location = document.createElement("p");
    location.innerText = Element.location;

    let div2 = document.createElement("div");

    let copylink = document.createElement("p");
    copylink.innerText = "❐ Copy link";
    copylink.className = "blue";

    let share = document.createElement("button");
    share.innerText = "Share";

    div2.append(copylink, share);

    card.append(div1, eventname, duration, location, div2);

    cointainer.append(card);
  });
}

//task page buttons
function taskpage() {
  window.location.href = "task.html";
}

//delete events
function deleteEvent(index) {
    console.log(index)
    Calendly_Events.splice(index,1)

    appendData(Calendly_Events)
    localStorage.setItem("Calendly_Events",JSON.stringify(Calendly_Events))
}




//filter events 

function filterEvents(){
    
   let filter=document.getElementById("filter").value

   if(filter==""){
    appendData(Calendly_Events)
   }else{
    let filteredData=Calendly_Events.filter(function(Element){
     if(Element.eventname.toLowerCase().includes(filter.toLowerCase())  ||Element.location.toLowerCase().includes(filter.toLowerCase())){
        return Element
     }
    })
    appendData(filteredData)
   }




}




