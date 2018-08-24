function Queue() {
    this.dataStore = [];
    this.count = count;

    function count() {
        return this.dataStore.length;
    }

    //thêm một phần tử vào cuối hàng đợi
    this.enqueue = function (element) {
        this.dataStore.push(element);
    }

    //loại bỏ một phần tử từ phía trước của hàng đợi:
    this.dequeue = function () {
        return this.dataStore.shift();
    }

    //kiểm tra cac phần tử trước
    this.front = function () {
        return this.dataStore[0];
    }
    //kiểm tra các ptu sau
    this.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    }

    //hiển thị tất cả các phần tử trong hàng đợi
    this.toString = function () {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }

    //cho phép chúng ta biết nếu một hàng đợi trống:
    this.empty = function () {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

}

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = ["F Allison McMillan", "M Frank Opitz", "M Mason McMillan", "M Clayton Ruff", "F Cheryl Ferenback", "M Raymond Williams", "F Jennifer Ingram", "M Bryan Frazer", "M David Durr", "M Danny Martin", "F Aurora Adney"];

    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }

    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }

    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }

    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    document.write("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        document.write("Female dancer is: " + person.name);
        person = males.dequeue();
        document.write(" and the male dancer is: " + person.name + "<br>");
    }
    document.write();
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    document.write(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
    document.write(maleDancers.front().name + " is waiting to dance." + "<br>");
}

var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
    document.write("There are " + maleDancers.count() + " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
    document.write("There are " + femaleDancers.count() + " female dancers waiting to dance." +"<br>");
}