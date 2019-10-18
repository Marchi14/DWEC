class unaclase {
    constructor(opcion1, opcion2) {
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.names_ = [];
    }

    set name(valor) {
        this.names_.push(valor);
    }

    set opcion_1(valor) {
        this.opcion_1 = valor;
    }

    get opcion_1() {
        return this.opcion_1;
    }
}