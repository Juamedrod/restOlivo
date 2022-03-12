import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Plato from 'src/app/interfaces/plato.interface';
import { CartaService } from 'src/app/services/carta.service';

@Component({
  selector: 'carta-detalle',
  templateUrl: './carta-detalle.component.html',
  styleUrls: ['./carta-detalle.component.css']
})
export class CartaDetalleComponent implements OnInit {
  cartaAMostrar: string = '';
  lista: Plato[];
  toggle: boolean = false;

  constructor(private route: ActivatedRoute, private cartaService: CartaService) {
    this.lista = [{ nombre: 'Loading', alergenos: [1], precioMedia: ' 0', precioEntera: ' 0' }]
  }

  ngOnInit(): void {
    this.cartaAMostrar = this.route.snapshot.paramMap.get('cartaDetalle')!;
    if (this.cartaAMostrar != null) {
      this.loadLista(this.cartaAMostrar);
    }
  }

  loadLista(cartaAMostrar: string) {
    this.lista = this.cartaService.listaAMostrar(this.cartaAMostrar);
  }

  toggler() {
    this.toggle = !this.toggle;
  }
}
