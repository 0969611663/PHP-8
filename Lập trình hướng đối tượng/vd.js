var Rectangle = function (width, height) {

    //thay doi chieu dai cua hinh chu nhat
    this.setWidth = function(width_new){
        width = width_new;
    }

    this.getArea = function(){
        return width * height;
    }

    this.display = function () {
        console.log("width = " + width + "; height =  " + height);
        console.log("Area: " + this.getArea());
    }

}

function main() {
    //tao doi tuong hinh chu nhat co width = 2, height = 5
    var rec1 = new Rectangle(2, 5);
    //tao doi tuong hinh chu nhat, co width = 5, height = 7;
    console.log("Rectangle 1: ");
    rec1.display();

    //thay doi chieu dai
    rec1.setWidth(20);
    console.log("Sau thay doi 1: ");
    rec1.display();



    /*    var rec2 = new Rectangle(5, 7);
        //muon hien thi doi tuong rec1
        rec1.display();
        console.log("Rectangle 1: ")
        //muon hien thi doi tuong rec2
        rec2.display(); */
}

main();