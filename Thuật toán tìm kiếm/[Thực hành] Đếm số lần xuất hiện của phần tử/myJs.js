function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; i++) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
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

function dispArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        document.write(arr[i] + " ");
        if (i % 10 == 9) {
            document.write("\n");
        }
    }
    if (i % 10 != 0) {
        document.write("\n");
    }
}

var nums = [];
for (var i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}

insertionsort(nums);


dispArr(nums);
document.write("<br/>");

var val = parseInt(prompt("Enter a value to count: "));

var retVal = count(nums, val);
document.write("Found " + retVal + " occurrences of " + val + ".");