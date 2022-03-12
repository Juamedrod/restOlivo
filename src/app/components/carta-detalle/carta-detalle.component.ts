import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Plato from 'src/app/interfaces/plato.interface';
import Vino from 'src/app/interfaces/vino.interface';
import { CartaService } from 'src/app/services/carta.service';

@Component({
  selector: 'carta-detalle',
  templateUrl: './carta-detalle.component.html',
  styleUrls: ['./carta-detalle.component.css']
})
export class CartaDetalleComponent implements OnInit {
  cartaAMostrar: string = '';
  lista: Plato[];
  listaVinos: Vino[];
  toggle: boolean = false;
  listaDenominaciones: string[] = [];

  constructor(private route: ActivatedRoute, private cartaService: CartaService, private router: Router) {
    this.lista = [{ nombre: 'Loading', alergenos: [1], precioMedia: ' 0', precioEntera: ' 0' }];
    this.listaVinos = [{ nombre: 'Loading', denominacion: 'Loading', precio: 0, alergenos: [0] }];
  }

  ngOnInit(): void {
    this.cartaAMostrar = this.route.snapshot.paramMap.get('cartaDetalle')!;
    if (this.cartaAMostrar != null) {
      if (this.cartaAMostrar === 'Alergenos') return;
      this.loadLista(this.cartaAMostrar);
    }
  }

  loadLista(cartaAMostrar: string) {
    switch (cartaAMostrar) {
      case 'Vinos':
        this.listaVinos = this.cartaService.listaAMostrar(this.cartaAMostrar);
        this.listaDenominaciones = this.cartaService.getDenominaciones();
        break;

      default:
        this.lista = this.cartaService.listaAMostrar(this.cartaAMostrar);
        break;
    }
  }

  selectDenominacion($event: any) {
    this.listaVinos = this.cartaService.filtrarVinoPorCategoria($event.target.value);
  }

  toggler() {
    this.toggle = !this.toggle;
  }
}
