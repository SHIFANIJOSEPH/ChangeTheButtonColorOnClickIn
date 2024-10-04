function changeColor(buttonId,color){
    document.getElementById(buttonId).style.backgroundColor=color;
    document.body.style.backgroundColor=color;
    

}
function resetColor(){
    document.getElementById("redButton").style.backgroundColor='white';
    document.getElementById("greenButton").style.backgroundColor='white';
    document.getElementById("blueButton").style.backgroundColor='white';
}