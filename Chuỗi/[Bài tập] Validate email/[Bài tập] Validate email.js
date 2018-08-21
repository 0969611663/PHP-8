function main(x) {
    var x = prompt("nhap");

    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(.[A-Za-z0-9]+)$/;
    if (regexp.test(x)) {
        alert("ban nhap dung");
    } else {
        alert("ban nhap sai");
    }
}
main();