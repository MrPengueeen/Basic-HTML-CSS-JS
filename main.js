window.onload = function() {
    value = 1;
    fontSize = changeFontSize(value);
    document.getElementById("number").innerHTML = formatNumber(value);
    document.getElementById("number").style.fontSize = fontSize.toString() + "px";
   
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); //Formatted number with commas
}

function changeFontSize(num) {
    fontSize = 200;
    while(num != 0) {
        fontSize -= 20;
        num = Math.floor(num/10);
        console.log(num); /// Debugging purpose
    }
    return fontSize;
}