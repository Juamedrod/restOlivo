import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  cartaItems: any = [];

  constructor() {
    this.cartaItems = [
      {
        label: 'Desayunos',
        img: 'desayunos.jpg'
      },
      {
        label: 'Aperitivos',
        img: 'aperitivos.jpg'
      },
      {
        label: 'Tapas',
        img: 'tapas.jpg'
      },
      {
        label: 'Entrantes',
        img: 'entrantes.jpg'
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
        img: 'pescados.jpg'
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
