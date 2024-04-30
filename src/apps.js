const Counter = (number, id, countNum) =>{
    const container = document.getElementById(id);
    let countNumber = 0;
    const setIntervalId = setInterval(()=>{
        container.innerHTML = countNumber;
        countNumber += countNum;
        if(countNumber > number){
            clearInterval(setIntervalId);
        }
    },70)
}

export {Counter}