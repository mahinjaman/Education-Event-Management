const Counter = (number, id, countNum) =>{
    const container = document.getElementById(id);
    let countNumber = 0;
    const setIntervalId = setInterval(()=>{
        container.innerHTML = countNumber;
        countNumber++;
        if(countNumber > number){
            clearInterval(setIntervalId);
        }
    },countNum)
}

export {Counter}