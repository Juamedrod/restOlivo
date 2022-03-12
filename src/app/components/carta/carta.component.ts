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
        img: 'desayunos.png'
      },
      {
        label: 'Aperitivos',
        img: 'aperitivos.png'
      },
      {
        label: 'Tapas',
        img: 'tapas.png'
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
        img: 'pescados.png'
      },
      {
        label: 'Bebidas',
        img: 'refrescos.jpeg'
      },
      {
        label: 'Vinos',
        img: 'vinos.png'
      },
      {
        label: 'Alergenos',
        img: 'gluten.png'
      }
    ]
  }

  ngOnInit(): void {
  }

}
