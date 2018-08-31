function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

function dispArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        document.write(arr[i] + " ");
        if (i % 10 == 9) {
            document.write("<br>");
        }
    }
    if (i % 10 != 0) {
        document.write("<br>");
    }
}

// var nums = [];
// for (var i = 0; i < 100; ++i) {
//     nums[i] = Math.floor(Math.random() * 101);
// }
// dispArr(nums);
// var num = parseInt(prompt("Enter a number to search for: "));
// document.write();
// if (seqSearch(nums, num)) {
//     document.write(num + " is in the array.");
// }
// else {
//     document.write(num + " is not in the array.");
// }
// document.write();
// dispArr(nums);

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
var num = prompt("Enter a number to search for: ");
document.write();
var positions = seqSearch(nums, num);
if (positions > -1) {
    document.write(num + " is in the array at position " + positions + "<br>");
} else {
    document.write(num + " is not in the array." + "<br>");
}
document.write();
dispArr(nums);