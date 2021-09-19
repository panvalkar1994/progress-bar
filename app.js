let progressBar = document.querySelector('.completed-so-far')

let value = 0;
let mytimer = setInterval(()=>{
    value += 1
    progressBar.style.width = `${value}%`;
    if(value>=98){
        clearInterval(mytimer);
    }
}, 200)