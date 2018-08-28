function CArray(munElements) {
    this.dataStore = [];
    this.pos = 0; // vi tri
    this.munElements = munElements;

    this.setData = function () {
        for (var i = 0; i < this.munElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.munElements + 1));
        }
    }

    this.clear = function () {
        for (var i = 0; i < this.munElements; i++) {
            this.dataStore[i] = 0;
        }
    }

    this.insert = function (element) {
        this.dataStore[this.pos++] = element;
    }

    this.toString = function () {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; i++) {
            retstr += this.dataStore[i] + " ";
            if (i>0&&i%10==0) {
                retstr += "\n" + "<br>";
            }
        }
        return retstr;
    }

    this.swap = function(arr, index1, index2) {
        var temp = arr [index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    //PTTTSX nổi bọt
    this.bubbleSort = function() {
        var numElements = this.dataStore.length;
        var temp;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer-1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner+1]) {
                    this.swap(this.dataStore, inner, inner+1);
                }
            }
        }
    }
}

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();

myNums.bubbleSort();

document.write("<br/>");
document.write(myNums.toString());

