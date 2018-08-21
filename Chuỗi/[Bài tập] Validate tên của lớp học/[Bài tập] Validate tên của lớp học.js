function className(str) {

    regexp = /^[A,C,P][0-9]{4}[G,H,I,K,L,M]$/;
    if(regexp.test(str)) {
        alert("nhap dung");
    } else {
        alert("nhap sai");
    }
}
var str1=prompt("nhap");
className(str1);