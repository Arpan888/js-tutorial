let button = document.querySelectorAll("button")


let body = document.querySelector("body")

button.forEach((but)=>{
    console.log(but);
    but.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor =  e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor =  e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor =  e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor =  e.target.id;
        }
        if(e.target.id === 'brown'){
            body.style.backgroundColor =  e.target.id;
        }
        

    })
    

})
