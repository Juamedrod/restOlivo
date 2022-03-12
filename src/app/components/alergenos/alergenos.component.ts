import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alergenos',
  templateUrl: './alergenos.component.html',
  styleUrls: ['./alergenos.component.css']
})
export class AlergenosComponent implements OnInit {
  arrayAlergenos: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  constructor() { }

  ngOnInit(): void {
  }

}
