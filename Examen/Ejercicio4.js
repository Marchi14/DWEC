var todos = document.getElementsByTagName("li"); //Creamos un array llamado todos en el que insertaremos todos los elementos con la etiqueta li
var liClaseA = []; //Creamos un array vacio denominado liClaseA
for (var i = 0, tam = todos.length; i < tam; i++) { //Creamos un bucle for en el cual creamos la variable tam que contendra la longitud del array todos para usarlo como limitador del bucle
    if (todos[i].className === "a") { //Insertamos un condicionante en el que la condicion de entrada sera que el elemento li dentro de la posicion correspondiente al array todos tenga una clase de nombre a
        liClaseA.push(todos[i]); //La accion que se realiza en el if es que se insertara por la izquierda el valor del puntero que tengamos señalado en el array todos dentro del array liClaseA
    }
}
$("li.a"); //Este selector de JQuery llamara a todos los elementos li con la clase a