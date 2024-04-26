const Counter = (number, id) =>{
    const container = document.getElementById(id);
    let countNumber = 0;
    const setIntervalId = setInterval(()=>{
        container.innerHTML = countNumber;
        countNumber++;
        if(countNumber > number){
            clearInterval(setIntervalId);
        }
    },50)
}

export {Counter}