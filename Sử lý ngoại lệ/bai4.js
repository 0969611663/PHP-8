//Bài 4: Tạo một web form và sử dụng try/catch/finally để bắt lỗi trường hợp số điền vào lớn hơn 100. Luôn đưa ra lời cảm ơn người dùng mỗi khi họ nhập vào form (bất kể giá trị đúng hay sai)
function number() {
    var numb = prompt("nhap so");

    try {
        if (numb > 100) throw "numb";
        alert("CAM ON BAN DA NHAP SO < 100");
        console.log("cam on ban");
    } catch (e) {
        console.log("Erorr: " + e.messenger);
        alert("CAM ON BAN DA NHAP SO > 100");
    } finally {
        console.log("the and" );
    }
}