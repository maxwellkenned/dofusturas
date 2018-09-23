export class Cercado {

    constructor( key$ ='', nombre='', ubicacion='', tipo='', propietario='' ){
        this.key$ = key$;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tipo = tipo;
        this.propietario = propietario;
    }

    key$: string;
    nombre: string;
    ubicacion: string;
    tipo: string;
    propietario: string;
}



export class Montura {

    constructor(  key$='', nombre='', especie='', tipo='', img='', ubicacion='' , propietario='', fecundada='no' ){
        this.key$ = key$;
        this.nombre = nombre;
        this.especie = especie;
        this.tipo = tipo;
        this.img = img;
        this.fecundada = fecundada;
        this.ubicacion = ubicacion;
        this.propietario = propietario;
    }

    key$: string;
    nombre: string;
    especie: string;
    tipo: string;
    img: string;
    reproducciones: number;
    fecundada: string;
    ubicacion: string;
    propietario: string;
}

export class Usuario {

    constructor( uid ='', nombre='', apellido='', correo='', img='' , admin=false ){
        this.uid = uid;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.img = img;
        this.admin = admin;
    }

    uid: string;
    nombre: string;
    apellido: string;
    correo: string;
    img: string;
    admin: boolean;
}