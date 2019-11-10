var tablero = new Array(8);

for (let i = 0; i < tablero.length; i++) {
    tablero[i] = new Array(8);
}

var actualx = 0;
var actualy = 0;
tablero[0][0] = 1;

function check(x, y) {
    console.log(x);
    console.log(y);
    flag = false;
    console.log(actualx);
    console.log(actualy);
    var nuevax = x - actualx;
    var nuevay = y - actualy;
    console.log(nuevax);
    console.log(nuevay);
    if (nuevax == 1 && nuevay == 2) flag = true;
    if (nuevax == -1 && nuevay == 2) flag = true;
    if (nuevax == 1 && nuevay == -2) flag = true;
    if (nuevax == -1 && nuevay == -2) flag = true;
    if (nuevax == 2 && nuevay == 1) flag = true;
    if (nuevax == -2 && nuevay == 1) flag = true;
    if (nuevax == 2 && nuevay == -1) flag = true;
    if (nuevax == -2 && nuevay == -1) flag = true;
    if (tablero[x][y] == 1) flag = false;
    console.log(flag);
    if (flag) {
        pintaycolorea(x, y);
        actualx = x;
        actualy = y;
    }
    event.preventDefault();
    event.stopPropagation();
}

function pintaycolorea(x, y) {
    console.log(x);
    console.log(y);
    tablero[x][y] = 1;
    document.getElementById("c" + x + y).innerHTML = '<img src="horse.gif" alt="Caballo" width="46px" height="46px">';
    document.getElementById("c" + actualx + actualy).innerHTML = '';
    event.preventDefault();
    event.stopPropagation();
}

function DragOver(event) {
    event.preventDefault();
}