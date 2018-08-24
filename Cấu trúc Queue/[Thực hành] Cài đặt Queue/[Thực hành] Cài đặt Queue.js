function Queue() {
    this.dataStore = [];


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
    this.empty = function() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

}

var q = new Queue();
q.enqueue("Meredith"+"<br>");
q.enqueue("Cynthia"+"<br>");
q.enqueue("Jennifer"+"<br>");
document.write(q.toString());

q.dequeue();
document.write(q.toString());
document.write("Front of queue: " + q.front());
document.write("Back of queue: " + q.back());
