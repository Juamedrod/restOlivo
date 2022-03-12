import Plato from '../interfaces/plato.interface';

export const Carnes: Plato[] = [
    { nombre: 'CARNES', alergenos: [0], precioMedia: '1/2R', precioEntera: '1R' },
    { nombre: 'Pata de cordero / Leg of lamb', alergenos: [0], precioMedia: 'X', precioEntera: '1Kg/ 30.00' },
    { nombre: 'Paletilla cordero / Shoulder of lamb', alergenos: [0], precioMedia: 'X', precioEntera: '1Kg/ 30.00' },
    { nombre: 'Chuletilla cordero / Lamb chops', alergenos: [0], precioMedia: 'X', precioEntera: '18.00' },
    { nombre: 'Rabo de toro / Oxtail', alergenos: [1, 12], precioMedia: 'X', precioEntera: '16.50' },
    { nombre: 'Carrillada / Pork lein stew', alergenos: [1, 12], precioMedia: 'X', precioEntera: '13.00' },
    { nombre: 'Solomillo Ibérico al ajillo / Iberian pork fillet in garlic sauce', alergenos: [1, 12], precioMedia: 'X', precioEntera: '17.00' },
    { nombre: 'Solomillo Ibérico a la Brasa / Wood Grilled Iberian pork fillet', alergenos: [0], precioMedia: 'X', precioEntera: '17.00' },
    { nombre: 'Solomillo Ibérico a la castellana / Iberian pork fillet in spanish sauce', alergenos: [1, 3, 7, 12], precioMedia: 'X', precioEntera: '18.00' },
    { nombre: 'Pluma Ibérica / Iberian cut of pork (succulent)', alergenos: [0], precioMedia: 'X', precioEntera: '19.00' },
    { nombre: 'Entrecot de ternera / Entrecote steak', alergenos: [0], precioMedia: 'X', precioEntera: '17.50' },
    { nombre: 'Chuletón de Retinto / T-bone retinto steak (local beef)', alergenos: [0], precioMedia: 'X', precioEntera: '(mínimo 700g/ración) 100g/4.00' },
    { nombre: 'Solomillo de Retinto / Fillet steak retinto (local beef)', alergenos: [0], precioMedia: 'X', precioEntera: '(mínimo 280g/ración) 100g/8.00' },
    { nombre: 'Salsa el Olivo / House sauce', alergenos: [1, 7, 12], precioMedia: 'X', precioEntera: '2.00' },
    { nombre: 'Salsa roquefort / House sauce', alergenos: [1, 7, 12], precioMedia: 'X', precioEntera: '2.00' },
    { nombre: 'Salsa pimienta / House sauce', alergenos: [1, 7, 12], precioMedia: 'X', precioEntera: '2.00' },
]