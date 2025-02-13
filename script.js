const divtext = document.getElementById("output");
const buttonaccess = document.getElementsByTagName("button")[0];
const defaulttext= divtext.innerText;

buttonaccess.onclick =()=>{
    if(divtext.innerText===defaulttext){
        divtext.innerText= "Clicked Me!!"
        alert("text changed")
        document.body.style.backgroundColor="aqua";
        
       
    }
    else{
        divtext.innerText=defaulttext
        document.body.style.backgroundColor="lightgray"

    }
 }
