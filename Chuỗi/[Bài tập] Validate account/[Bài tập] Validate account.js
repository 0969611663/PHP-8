function Pattern() {
    var x = prompt("nhap di");

    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(x)) {
        alert("ban nhap dung");
    } else {
        alert("ban nhap sai");
    }
}
Pattern();