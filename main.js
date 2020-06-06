window.onload = function() {
    value = 100;
    if (value > 1000) {
        document.getElementById("number").style.fontSize = "100px";
    }
    document.getElementById("number").innerHTML = formatNumber(value);
   
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); //Formatted number with commas
}