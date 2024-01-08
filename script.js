const box = document.querySelectorAll(".box");
//console.log(box);
const body = document.querySelector("body")
//console.log(body);


box.forEach((btn)=>{
   //console.log(btn);
   btn.addEventListener("click",(e)=>{
        console.log(e);
    if(e.target.id === "red"){
         body.style.backgroundColor = e.target.id
    }else if(e.target.id === "green"){
        body.style.backgroundColor = e.target.id
    }else if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id
    }else if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id
    }

   })
})