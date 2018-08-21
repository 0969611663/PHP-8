function phone(str) {

    regexp = /^[(][0-9]{2}[)][-][(][0][0-9]{9}[)]$/;
    if(regexp.test(str)) {
        alert("so phone hop ly! goi de");
    } else {
        alert("so phone k hop le! goi lai de cu");
    }
}
var str1 = prompt("nhap so phone");
phone(str1);