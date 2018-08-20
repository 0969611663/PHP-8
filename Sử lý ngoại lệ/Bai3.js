//Bài 3: Tạo một web form và sử dụng try/catch để bắt trường hợp tên thành phố điền vào không phải là "stockholm". Cung cấp phản hồi trực quan nếu tên thành phố không đúng.
function city() {
    var cityName = prompt("nhap ten thanh pho");

    try {
        if (cityName != "stockholm") throw "stockholm";
        alert("nhap ten dung");
        console.log("stockholm la ten dung");
    } catch (e) {
        console.log("Error " + e.messesger);
        alert("nhap ten sai");
    }
}

