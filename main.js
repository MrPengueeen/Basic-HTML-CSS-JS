
window.onload = function() {
    value = 99999999;
    fontSize = changeFontSize(value);
    document.getElementById("number").innerHTML = formatNumber(value);
    document.getElementById("number").style.fontSize = fontSize.toString() + "px";
   
}

setInterval(changeNumber, 1000); //Comment this line out to show the static value of variable 'value'

function changeNumber(){
    curNum=document.getElementById("number").textContent;
    value=parseInt(curNum)*10;
    if(value>99999999){
        value=20;
    }
    console.log(value);
    document.getElementById("number").innerHTML = value;
    fontSize = changeFontSize(value);
    document.getElementById("number").style.fontSize = fontSize.toString() + "px";

}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); //Formatted number with commas
}

function changeFontSize(num) {
    fontSize = 140;
    while(num != 0) {
        fontSize -= 11.8;
        num = Math.floor(num/10);
        console.log(num); /// Debugging purpose
    }
    return fontSize;
}