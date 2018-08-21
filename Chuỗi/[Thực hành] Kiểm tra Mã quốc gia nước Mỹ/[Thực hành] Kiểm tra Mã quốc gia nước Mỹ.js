function is_usZipCode(zipcode) {
    var zipcode1 = "03201-2150";
    var zipcode2 = "7892";

    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(zipcode1)) {
        alert("true");
        console.log("true");
    } else {
        alert("false");
        console.log("false");
    }


    if (regexp.test(zipcode2)) {
        alert("true");
        console.log("true");
    } else {
        alert("false");
        console.log("false");
    }
}