 
    document.querySelector("#bt").addEventListener("click",function(){
        document.querySelector(".popup").style.display="flex"
    })
    document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".popup").style.display="none"
        
    })
    document.querySelector(".close1").addEventListener("click",function(){
        
        document.querySelector(".popup1").style.display="none";
        window.location.href="navbar.html"
       
    })
   
    document.querySelector("#gs").addEventListener("click",function(){
       let email = document.querySelector("#email").value ;
        if(email==""){
            document.querySelector("#email").style.border="red 1px solid"
        }else{
            localStorage.setItem("calendly_user",email)
        document.querySelector(".popup").style.display="none"
        document.querySelector(".popup1").style.display="flex"
        
        count=30;
        function tim(){
            count--;
         document.querySelector("#co").innerText=count;
            if(count==0){
                clearInterval(id)
             
            }
        }
        }
        
        let id=setInterval(tim,1000)

    })
  let count;
 
        
    document.querySelector("#send").addEventListener("click",function(){
        count=30;
        function tim(){
            count--;
         document.querySelector("#co").innerText=count;
            if(count==0){
                clearInterval(id)
             
            }
        }
        
        let id=setInterval(tim,1000)
    })
    
       
    
    function clickEvent(first,last){
        if(first.value.length){
            document.getElementById(last).focus()
        }
    }
    document.querySelector("#gs1").addEventListener("click",function(){
        let fst=document.getElementById("fst").value ;
        let sec=document.getElementById("sec").value ;
        let thr=document.getElementById("thr").value ;
        let fr=document.getElementById("for").value ;
        let fiv=document.getElementById("fiv").value ;
        
        if(count==0){
            alert("Time Out Try again")
        document.getElementById("fst").value=null ;
        document.getElementById("sec").value=null ;
        document.getElementById("thr").value=null;
        document.getElementById("for").value=null;
        document.getElementById("fiv").value=null;
       
        }
        else if(fst!=1||sec!=2||thr!=3||fr!=4||fiv!=5){
            alert("Wrong Otp")
        document.getElementById("fst").value=null ;
        document.getElementById("sec").value=null ;
        document.getElementById("thr").value=null;
        document.getElementById("for").value=null;
        document.getElementById("fiv").value=null;
        }
        
        
        else{
            window.location.href="dashboard.html"
        }
        
    })