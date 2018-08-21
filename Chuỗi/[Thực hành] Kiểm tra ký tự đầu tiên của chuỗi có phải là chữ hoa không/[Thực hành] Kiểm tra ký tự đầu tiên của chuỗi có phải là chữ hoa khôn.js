function upperCase(str) {
    var str1 = "Nguyen van Nam";
    var str2 = "NGUYEN VAN NAM";
    var str3 = "nguyen van Nam";

    regexp = /^[A-Z]/;
    if (regexp.test(str1)) {
        console.log("String's first character is uppercase");
        alert("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
        alert("String's first character is not uppercase");
    }

    if (regexp.test(str2)) {
        console.log("String's first character is uppercase");
        alert("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
        alert("String's first character is not uppercase");
    }

    if (regexp.test(str3)) {
        console.log("String's first character is uppercase");
        alert("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
        alert("String's first character is not uppercase");
    }

}