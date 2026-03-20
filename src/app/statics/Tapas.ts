import Plato from '../interfaces/plato.interface';

export const Tapas: Plato[] = [
  { nombre: 'plato1', alergenos: [0], precioMedia: '1/2R', precioEntera: '1R' },
  {
    nombre: 'plato2',
    alergenos: [4, 7, 12, 10, 3, 6],
    precioMedia: 'X',
    precioEntera: '3.33',
  },
  {
    nombre: 'plato3',
    alergenos: [12, 2],
    precioMedia: 'X',
    precioEntera: '4.44',
  },
  {
    nombre: 'plato4',
    alergenos: [4, 12],
    precioMedia: 'X',
    precioEntera: '4.99',
  },
  { nombre: 'plato5', alergenos: [0], precioMedia: 'X', precioEntera: '4.44' },
  {
    nombre: 'plato6',
    alergenos: [2, 3, 6, 7, 12],
    precioMedia: 'X',
    precioEntera: '5.55',
  },
  {
    nombre: 'plato7',
    alergenos: [1, 12, 4],
    precioMedia: 'X',
    precioEntera: '4.99',
  },
];
