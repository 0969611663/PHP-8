function List() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
    this.toString = toString;
    this.length = length;
    this.find = find;
    this.append = append;
    this.insert = insert;
    this.remove = remove;
}

function Employee(name, salary, email) {
    this.name = name;
    this.salary = salary;
    this.email = email;

    this.getName = function () {
        return this.name;
    }

    this.getSalary = function () {
        return this.salary;
    }

    this.getMail = function () {
        return this.email;
    }
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
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

//Chèn một phần tử vào một danh sách
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

// Xác định xem một giá trị được đưa ra trong danh sách
function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}


var e1 = new Employee("Thảo", "400", "thao@gmail.com");
var e2 = new Employee("Phương", "500", "phuong@gmail.com");
var e3 = new Employee("Hà", "450", "ha@gmail.com");
var e4 = new Employee("Huấn", "100", "huan@gmail.com");
var e5 = new Employee("Hảo", "200", "hao@gmail.com");
var e6 = new Employee("Linh", "500", "linh@gmail.com");
var listEmployee = new List();

listEmployee.append(e1);
listEmployee.append(e2);
listEmployee.append(e3);
listEmployee.append(e4);
listEmployee.append(e5);

listEmployee.insert(e6, e4);


listEmployee.remove(e1);


for (i = 0; i < listEmployee.listSize; i++) {
    document.write((i + 1) + "-" + listEmployee.toString()[i].name + "-");
    document.write(listEmployee.toString()[i].salary +"/slot"+ "-");
    document.write(listEmployee.toString()[i].email + "<br>");
}




