// fetching the divs from html by query selector
let div1=document.querySelector("#press_any_key");
let div2=document.querySelector("#keyname");
let div3=document.querySelector("#history");

//function for the keydown event
function keypressedevent(e){
    //for the naming of the key
    let keyname=e.key;
    div1.innerHTML=`<h1 id=heading> You pressed    <span id="keycolor">   ${keyname}</span></h1>`
     //for the naming of the keycode
    let code=e.keyCode;
    div2.innerHTML=`<div id="keycode">${code}</div>`
    //for maintain the history 
    let history=div3.textContent;
     div3.textContent=history+'  '+keyname;
    }

// keyboard event
document.body.addEventListener("keydown",keypressedevent);


