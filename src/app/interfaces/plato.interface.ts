export enum alergenos { Ninguno, Gluten, Crustaceos, Huevos, Pescados, Cacahuetes, Soja, Leche, Frutos, Apio, Mostaza, Sesamo, Azufre, Altramuces, Moluscos };

export default interface Plato {
    nombre: string;
    alergenos: alergenos[];
    precioMedia: string;
    precioEntera: string;

}