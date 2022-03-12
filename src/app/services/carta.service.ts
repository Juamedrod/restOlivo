import { Injectable } from '@angular/core';
import Plato from '../interfaces/plato.interface';
import Vino from '../interfaces/vino.interface';
import { Aperitivos } from '../statics/Aperitivos';
import { Bebidas } from '../statics/Bebidas';
import { Carnes } from '../statics/Carnes';
import { Desayunos } from '../statics/Desayunos';
import { Entrantes } from '../statics/Entrantes';
import { Pescados } from '../statics/Pescados';
import { Sopas } from '../statics/Sopas';
import { Tapas } from '../statics/Tapas';
import { Vinos } from '../statics/Vinos';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor() { }

  listaAMostrar(cartaSeleccionada: string): any {
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

      case 'Bebidas':
        return this.listaBebidas;
        break;

      case 'Tapas':
        return this.listaTapas;
        break;

      case 'Vinos':
        return this.listaVinos;
        break;

      default:
        return this.listaDesayunos;
        break;
    }

  }

  getDenominaciones() {
    return ['Rioja 3/4', 'Rioja Magnum', 'Ribera Del Duero 3/4', 'Ribera Del Duero Magnum', 'Vinos de la tierra', 'Blancos 3/4', 'Blancos Magnum', 'Rosados 3/4'];
  }

  filtrarVinoPorCategoria(categoria: string) {
    if (categoria === '') return this.listaVinos;
    return this.listaVinos.filter(vino => vino.denominacion == categoria);
  }

  listaDesayunos: Plato[] = Desayunos;
  listaAperitivos: Plato[] = Aperitivos;
  listaEntrantes: Plato[] = Entrantes;
  listaSopas: Plato[] = Sopas;
  listaCarnes: Plato[] = Carnes;
  listaPescados: Plato[] = Pescados;
  listaTapas: Plato[] = Tapas;
  listaBebidas: Plato[] = Bebidas;
  listaVinos: Vino[] = Vinos;

}
