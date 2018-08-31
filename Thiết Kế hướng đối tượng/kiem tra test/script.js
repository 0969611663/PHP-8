//LOP CHUOT
function Rat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.getNameR = function () {
        return this.name;
    }

    this.getSpeedR = function () {
        return this.speed;
    }

    this.getWeightR = function () {
        return this.weight;
    }

    this.runR = function () {
        alert("Toc do cua chuot la: " + this.getSpeedR());
    }
}

//LOP MEO
function Cat(name, speed) {
    this.nameC = name;
    this.speedC = speed;
    this.rat = null;

    this.getSpeedC = function () {
        return this.speedC;
    }

    this.getNameC = function () {
        return this.nameC;
    }

    this.runC = function () {
        alert("toc do cua meo la: " + this.getSpeedC());
    }

    this.catch = function () {
        if (this.speedC > this.rat.getSpeedR()) {
            alert("bat dc");
            return true;
        }
        alert("khong bat dc");
        return false;
    }

    this.eat = function (rat) {
        if (this.catch(rat)) {
            if (this.rat.getWeightR() < 10) {
                alert("Meo an chuot. Chuot gay: " + this.rat.getWeightR() + "Kg");
            } else {
                alert("Meo an chuot. Chuot beo: " + this.rat.getWeightR() + "Kg");
            }
        } else {
            alert("k bat duoc chuot doi");
        }
    }

    this.setRat123 = function (rat_new) {
        this.rat = rat_new;
    }
}


function List() {
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
    this.find = find;
    this.toString = toString;
    this.append = append;
    this.length = length;
    this.getElement = getElement;
    this.swap = swap;
    this
}

// tim con chuot
function find(nameRat) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].getNameR() === nameRat) {
            return true;
        }
    }
    return false;
}

//
function getElement(nameRat) {
    if (this.find(nameRat) == true) {
        document.write("tim thay: " + nameRat);
    } else {
        document.write("khong tim thay");
    }
}

//hien thi con chuot
function append(element) {
    this.dataStore[this.listSize++] = element;
}

//so con chuot
function length() {
    return this.listSize;
}

//hien thi mang con chuot
function toString() {
    return this.dataStore;
}


var rat1 = new Rat("Jerry", prompt("nhap can nag chuot"), prompt("nhap toc do chuot"));
var cat1 = new Cat("Tom", prompt("nhap toc do meo"));
cat1.setRat123(rat1);

function CatCatchRat() {
    cat1.catch();
}

function CatEatRat() {
    cat1.eat();
}


//
var rat1 = new Rat("Jerry", 80, 10);
var rat2 = new Rat("Micky", 9, 15);
var rat3 = new Rat("Mose", 100, 20);
var rat4 = new Rat("Tai", 11, 10);

var listRat = new List();
listRat.append(rat1);
listRat.append(rat2);
listRat.append(rat3);
listRat.append(rat4);

for (i = 0; i < listRat.listSize; i++) {
    document.write((i + 1) + "-" + listRat.toString()[i].name + "-");
    document.write(listRat.toString()[i].weight + "-");
    document.write(listRat.toString()[i].speed + "<br>");
}

function findRat() {
    listRat.getElement(prompt("nhap ten chuot"));
}


function swap(arr, index1, index2) {
    var temp = arr [index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= listRat.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= listRat.dataStore.length - 1; ++inner) {
            if (listRat.dataStore[inner].weight < listRat.dataStore[min].weight) {
                min = inner;
            }
        }
        swap(listRat.dataStore, outer, min);
    }
}

function selectionSorts() {//sap xep danh sach chuot
    document.write("_Sau khi sap xep: " + "<br>");
    selectionSort();
    for (i = 0; i < listRat.listSize; i++) {
        document.write((i + 1) + "-" + listRat.toString()[i].name + " - " + listRat.toString()[i].weight + "<br>");
    }
}

function catchRat() {
    var catNew = new Cat("Bom", 15);
    for (i = 0; i < listRat.dataStore.length; i++) {
        if (catNew.getSpeedC() >= listRat.toString()[i].speed) {
            document.write("Da bat duoc chuot " + listRat.toString()[i].name + "<br>");
        }
    }
}