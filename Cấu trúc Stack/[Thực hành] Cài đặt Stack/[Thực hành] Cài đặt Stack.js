function Stack() {
    this.dataStore = [];
    this.top = 0;

    this.push = function (element) {
        this.dataStore[this.top++] = element;
    }

    this.pop = function () {
        return this.dataStore[--this.top];
    }

    this.peek = function () {
        return this.dataStore[this.top - 1];
    }

    this.length = function () {
        return this.top;
    }

    this.clear = function () {
        this.top = 0;
    }
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
document.write("length: " + s.length()+"<br>");
document.write(s.peek()+"<br>");
var popped = s.pop();
//
document.write("The popped element is: " + popped+"<br>");
document.write(s.peek()+"<br>");
//
s.push("Cynthia");
//
document.write(s.peek()+"<br>");
//
s.clear();
//
document.write("length: " + s.length()+"<br>");
document.write(s.peek()+"<br>");
//
s.push("Clayton");
//
document.write(s.peek());
