import { alergenos } from "./plato.interface";

export default interface Vino {
    nombre: string;
    denominacion: string;
    precio: number;
    alergenos: alergenos[];
}

