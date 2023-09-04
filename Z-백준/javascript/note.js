const manualTurnInterval = setInterval(() => {
    manualTurn();
}, 10);      
setTimeout(() => {
    clearInterval(manualTurnInterval);
}, 1000);

function manualTurn(){
    console.log("asdf");
}