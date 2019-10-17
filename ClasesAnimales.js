function Animal(nom, esp, patas, cola) {
    this.nom = nom;
    this.esp = esp;
    this.patas = patas;
    this.cola = cola;
}

Animal.prototype.getterNom = function() {
    return this.nom;
};

Animal.prototype.setterNom = function(nom) {
    this.nom = nom;
};

Animal.prototype.getterEsp = function() {
    return this.esp;
};

Animal.prototype.setterEsp = function(esp) {
    this.esp = esp;
};

Animal.prototype.getterPatas = function() {
    return this.patas;
};

Animal.prototype.setterPatas = function(patas) {
    this.patas = patas;
};

Animal.prototype.getterCola = function() {
    return this.cola;
};

Animal.prototype.setterCola = function(cola) {
    this.cola = cola;
};

function Vaca(nom, esp, patas, cola, Cleche, leche) {
    Animal.call(this, nom, esp, patas, cola);
    this.Cleche = Cleche;
    this.leche = leche;
}

Vaca.prototype = new Animal();
Vaca.prototype.constructor = Vaca;

Vaca.prototype.ordeñarVaca = function(litros) {
    this.Cleche -= litros;
    return this.Cleche;
};

function Tigre(nom, esp, patas, cola, victimas) {
    Animal.call(this, nom, esp, patas, cola);
    this.victimas = victimas;
}

Tigre.prototype = new Animal();
Tigre.prototype.constructor = Tigre;

Tigre.prototype.comerPersona = function(vic) {
    this.victimas += vic;
    return this.victimas;
};