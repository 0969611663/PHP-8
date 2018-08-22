function year(x) {
    var x = prompt("nhap di");

    regexp = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/;
    if (regexp.test(x)) {
        alert("nhap dung roi: " + x);
    } else {
        alert("nhap sai nhap lai");
    }
}
year();