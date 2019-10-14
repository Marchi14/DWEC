function Article(cod,name,price){
    this.cod=cod;
    this.name=name;
    this.price=price;
    this.MostrarDatos = function(){
            return document.write('<p>'+this.price+' '+this.cod+' '+this.name+'</p>');
        }
}
var articulo1 = new Article('123','Art1','3');
var articulo2 = new Article('321','Art2','2');
var articulo3 = new Article('213','Art3','1');
articulo1.MostrarDatos();
articulo2.MostrarDatos();
articulo3.MostrarDatos(); 