let disp=document.querySelector('input');
let buttons= Array.from(document.querySelectorAll('button'));
let string ="";
Array.from(buttons).forEach(button =>{
    button.addEventListener('click',(ev)=>{
        if (ev.target.innerHTML == "="){
            string=eval(string);
            disp.value=string; 
        }
        else if(ev.target.innerHTML == "C"){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(ev.target)
            string = string + ev.target.innerHTML;
            disp.value = string;
        }
    })
})