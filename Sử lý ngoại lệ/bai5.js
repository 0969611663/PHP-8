function main() {
    var a = prompt("nhap gia tri a");
    var b = prompt("nhap gia tri b");
    var c = prompt("nhap gia tri c");
    var x;

    x = c / (a - b);
    alert("x = " + x);
    console.log("x =" + x);

    try {
        if ((a - b) == 0) throw "loi";
        console.log("ket qua khac 0");
        alert("ket qua khac 0");
    } catch (e) {
        console.log("Erorr: " + e);
        alert("ket qua bang 0");
    }
}

main();