console.log("Hello world!");



function showTime() {
    const timeElement = document.querySelector(".time");
    timeElement.innerHTML = new Date(); 
    
    // timeElement.innerHTML(new Date()); 
}

setInterval(() => {
    showTime()
}, 1000);