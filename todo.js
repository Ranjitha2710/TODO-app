let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let dleBtn=document.createElement("button");
    dleBtn.innerText="delete";
    dleBtn.classList.add("delete");
    item.appendChild(dleBtn);
});

//EVENT DELEGATION

ul.addEventListener("click",function(event){
   
    let listItem=event.target.parentElement;
    listItem.remove();
   
});