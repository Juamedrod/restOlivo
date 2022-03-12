import { Component, Input, OnInit } from '@angular/core';
import { alergenos } from 'src/app/interfaces/plato.interface';

@Component({
  selector: 'alergeno',
  templateUrl: './alergeno.component.html',
  styleUrls: ['./alergeno.component.css']
})
export class AlergenoComponent implements OnInit {
  @Input() tipoAlergeno: alergenos;
  constructor() { this.tipoAlergeno = 0 }

  ngOnInit(): void {
  }

}
