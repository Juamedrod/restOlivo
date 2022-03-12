import { Injectable } from '@angular/core';
import Plato from '../interfaces/plato.interface';
import { Aperitivos } from '../statics/Aperitivos';
import { Desayunos } from '../statics/Desayunos';

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

      default:
        return this.listaDesayunos;
        break;
    }

  }

  listaDesayunos: Plato[] = Desayunos;
  listaAperitivos: Plato[] = Aperitivos;
}
