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

    this.catch = function (rat) {
        if (this.speedC > this.rat.getSpeedR()) {
            alert("bat dc");
            return true;
        }
        alert("khong bat dc");
        return false;
    }

    this.eat = function (rat) {
        if (this.catch(rat)) {
            if (rat.getWeightR() < 10) {
                alert("Meo an chuot. Chuot gay");
            } else {
                alert("Meo an chuot. Chuot beo");
            }
        } else {
            alert("k bat duoc chuot doi");
        }
    }

    this.setRat123 = function (rat_new) {
        this.rat = rat_new;
    }
}

function GameRatAndCat() {
    this.RatRat = new Rat("Jerry", prompt("nhap can nag chuot"), prompt("nhap toc do chuot"));
    this.CatCat = new Cat("Tom", prompt("nhap toc do meo"));

    this.main = function () {
        this.CatCat.setRat123(this.RatRat);
        this.CatCat.catch();
        this.CatCat.eat();
    }
}

var game1 = new GameRatAndCat();
game1.main();




