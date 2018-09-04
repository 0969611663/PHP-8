var x = ['c', 's', 'c', '2', '6', '1'];
var first = 0;
var last = x.length - 1;

while (first < last) {
    var y = x[first];
    x[first] = x[last];
    x[last] = y ;
    first++;
    last--;
}

document.write(x);