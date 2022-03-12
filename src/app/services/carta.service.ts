import { Injectable } from '@angular/core';
import Plato from '../interfaces/plato.interface';
import { Aperitivos } from '../statics/Aperitivos';
import { Carnes } from '../statics/Carnes';
import { Desayunos } from '../statics/Desayunos';
import { Entrantes } from '../statics/Entrantes';
import { Pescados } from '../statics/Pescados';
import { Sopas } from '../statics/Sopas';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor() { }

  listaAMostrar(cartaSeleccionada: string) {

    switch (cartaSeleccionada) {
      case 'Desayunos':
        return this.listaDesayunos;
        break;

      case 'Aperitivos':
        return this.listaAperitivos;
        break;

      case 'Entrantes':
        return this.listaEntrantes;
        break;

      case 'Sopas':
        return this.listaSopas;
        break;

      case 'Carnes':
        return this.listaCarnes;
        break;

      case 'Pescados':
        return this.listaPescados;
        break;

      default:
        return this.listaDesayunos;
        break;
    }

  }

  listaDesayunos: Plato[] = Desayunos;
  listaAperitivos: Plato[] = Aperitivos;
  listaEntrantes: Plato[] = Entrantes;
  listaSopas: Plato[] = Sopas;
  listaCarnes: Plato[] = Carnes;
  listaPescados: Plato[] = Pescados;
}
