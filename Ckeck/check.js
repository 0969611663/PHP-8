function List() {
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
    this.append = append;
    this.find = find;
    this.remove = remove;
    this.insert = insert;
    this.toString = toString;
    this.length = length;
    this.getElement = getElement;
}

function News(title, content, day, view) {
    this.titles = title;
    this.contents = content;
    this.days = day;
    this.views = view;

    this.getTitle = function () {
        return this.titles;
    };

    this.setTitle = function (title_new) {
        this.titles = title_new;
    };

    this.getContent = function () {
        return this.contents;
    };

    this.setContent = function (content_new) {
        this.contents = content_new;
    };

    this.getDay = function () {
        return this.days;
    };

    this.setDay = function (day_new) {
        this.days = day_new;
    };

    this.getView = function () {
        return this.views;
    };

    this.setView = function (view_new) {
        this.views = view_new;
    };
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function swap(arr, index1, index2) {
    var temp = arr [index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= listNews.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= listNews.dataStore.length - 1; ++inner) {
            if (listNews.dataStore[inner].days < listNews.dataStore[min].days) {
                min = inner;
            }
        }
        swap(listNews.dataStore, outer, min);
    }
}

function find(nameNews) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].getTitle() === nameNews) {
            return true;
        }
    }
    return false;
}

function getElement(nameNews) {
    if (this.find(nameNews) == true) {
        document.write("tim thay tin tuc trong danh sach: " + nameNews);
    } else {
        document.write("khong tim thay tin tuc");
    }
}


var new1 = new News("Tin tuc bong da 1", "Doi bong VN thang doi bong Indonesia ", " Ngay: " + 4 + "/8/2018 ", " Luot xem: " + 5);
var new2 = new News("Tin tuc bong da 2", "Doi bong VN thang doi bong Han Quoc ", " Ngay: " + 3 + "/8/2018 ", " Luot xem: " + 20);
var new3 = new News("Tin tuc bong da 3", "Doi bong VN thang doi bong ThaiLan ", " Ngay: " + 2 + "/8/2018 ", " Luot xem: " + 10);
var new4 = new News("Tin tuc bong da 4", "Doi bong VN thang doi bong Nhat Ban ", " Ngay: " + 1 + "/8/2018 ", " Luot xem: " + 15);
var new5 = new News("Tin tuc bong da 5", "Doi bong VN thang doi bong Trung Quoc ", " Ngay: " + 6 + "/8/2018 ", " Luot xem: " + 20);

var listNews = new List();

listNews.append(new1);
listNews.append(new2);
listNews.append(new3);
listNews.append(new4);

//HIEN THI TIN TUC NHUNG CHUA SX
function NewTT() {
    for (var i = 0; i < listNews.listSize; i++) {
        document.write((i + 1) + "-" + listNews.toString()[i].titles + "-");
        document.write(listNews.toString()[i].contents + "-");
        document.write(listNews.toString()[i].days + "-");
        document.write(listNews.toString()[i].views + "<br>");
    }
}

//SAP XEP
function Sorts() {
    document.write("_Sau khi sap xep: " + "<br>");
    selectionSort();
    for (i = 0; i < listNews.listSize; i++) {
        document.write((i + 1) + "-" + listNews.toString()[i].titles + " - " + listNews.toString()[i].contents + "-" + listNews.toString()[i].days + "-" + listNews.toString()[i].views + "<br>");
    }
}

//XOA TIN TUC VA SX
function removeNews() {
    document.write("_Sau khi xoa tin tuc: " + "<br>");
    listNews.remove(new1);
    selectionSort();
    for (i = 0; i < listNews.listSize; i++) {
        document.write((i + 1) + "-" + listNews.toString()[i].titles + " - " + listNews.toString()[i].contents + "-" + listNews.toString()[i].days + "-" + listNews.toString()[i].views + "<br>");
    }
}

//THEM TIN TUC VA SX
function insertNews() {
    document.write("_Sau khi them tin tuc: " + "<br>");
    listNews.insert(new5, new4);
    selectionSort();
    for (i = 0; i < listNews.listSize; i++) {
        document.write((i + 1) + "-" + listNews.toString()[i].titles + " - " + listNews.toString()[i].contents + "-" + listNews.toString()[i].days + "-" + listNews.toString()[i].views + "<br>");
    }
}

//TIM KIEM TIN TUC
function findNews() {
    listNews.getElement(prompt("nhap ten tin tuc"));
}

//DOC TIN TUC
function readNews() {
    document.write("Doc tin tuc thoi: " + "<br>");
    selectionSort();
    for (i = 0; i < listNews.listSize; i++) {
        document.write((i + 1) + "-" + listNews.toString()[i].titles + " - " + listNews.toString()[i].contents + "-" + listNews.toString()[i].days + "-" + listNews.toString()[i].views + "<br>");
    }
}

