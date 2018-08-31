// function binSearch(arr, data) {
//     var upperBound = arr.length - 1;
//     var lowerBound = 0;
//     while (lowerBound <= upperBound) {
//         var mid = Math.floor((upperBound + lowerBound) / 2);
//         if (arr[mid] < data) {
//             lowerBound = mid + 1;
//         }
//         else if (arr[mid] > data) {
//             upperBound = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// }

function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        document.write("Current midpoint: " + mid + "<br>");
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
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

function insertionsort(arr) {
    var temp, j;
    for (var i = 1; i <= arr.length - 1; ++i) {
        temp = arr[i];
        j = i;
        while (j > 0 && (arr[j - 1] >= temp)) {
            arr[j] = arr[j - 1];
            --j;
        }
        arr[j] = temp;
    }
}

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
document.write();
var val = parseInt(prompt("Enter a value to search for: "));
var retVal = binSearch(nums, val);
if (retVal >= 0) {
    document.write("<br>"+"Found " + val + " at position " + retVal);
}
else {
    document.write("<br>"+val + " is not in array.");
}