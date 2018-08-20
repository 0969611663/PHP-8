function main() {
    var name = prompt("nhap ten");
    try {
        if (name != "tu") throw  "name";
        console.log("nhap ten dung");
        alert("bao dung");
    } catch (e) {
        console.log("Error: " + e.messenger);
        alert("bao sai");
    }
}
