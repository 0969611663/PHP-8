 function myFunc() {
        var a = 100 / 0;
        try {
            console.log("Value of variable a is : " + a) ;
        } catch (e) {
            console.log("Error: " + e.messenger);
        } finally {
            console.log("the end");
        }
    }
    myFunc();