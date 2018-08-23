function List() {
    this.dataStore = []; // initializes an empty array to store list elements
    this.listSize = 0;
    this.pos = 0;
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

//Loại bỏ một phần tử khỏi danh sách
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

//Chèn một phần tử vào một danh sách
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

//Loại bỏ tất cả các yếu tố khỏi danh sách
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize-1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize-1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

// Xác định xem một giá trị được đưa ra trong danh sách
function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

// var names = new List();
// names.append("Cynthia");
// names.append("Raymond");
// names.append("Barbara");
// document.write(names.toString()+"<br>");
//
// //Loại bỏ một phần tử khỏi danh sách
// names.remove("Raymond");
// document.write(names.toString());
//
// //Chèn một phần tử vào một danh sách
// names.insert("Raymond");
// document.write(names.toString()+ "<br>");

for(names.front(); names.currPos() < names.length(); names.next()) {
    document.write(names.getElement());
}
for(names.end(); names.currPos() >= 0; names.prev()) {
    document.write(names.getElement());
}

