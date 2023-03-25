import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  cartaItems: { label: string; img: string }[] = [];

  constructor() {
    this.cartaItems = [
      {
        label: 'Desayunos',
        img: 'desayunos.sm.jpg'
      },
      {
        label: 'Aperitivos',
        img: 'aperitivos.sm.jpg'
      },
      {
        label: 'Tapas',
        img: 'tapas.sm.jpg'
      },
      {
        label: 'Entrantes',
        img: 'entrantes.sm.jpg'
      },
      {
        label: 'Sopas',
        img: 'sopas.jpg'
      },
      {
        label: 'Carnes',
        img: 'carnes.jpg'
      },
      {
        label: 'Pescados',
        img: 'pescados.sm.jpg'
      },
      {
        label: 'Bebidas',
        img: 'refrescos.jpeg'
      },
      {
        label: 'Vinos',
        img: 'vinos.jpg'
      },
      {
        label: 'Alergenos',
        img: 'gluten.jpg'
      }
    ]
  }

  ngOnInit(): void {
  }

}
