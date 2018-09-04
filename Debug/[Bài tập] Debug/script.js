function products(){
    var a = parseInt(document.forms['f']['a'].value);
    var b = parseInt(document.forms['f']['b'].value);
    var result = a * b;
    document.getElementById("resultDiv").innerHTML = "Kết quả: " + result;
}