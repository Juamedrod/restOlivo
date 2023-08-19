import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Plato from 'src/app/interfaces/plato.interface';
import Vino from 'src/app/interfaces/vino.interface';
import { CartaService } from 'src/app/services/carta.service';
import jsPDF, { GState } from 'jspdf';
import { TranslateService } from '@ngx-translate/core';
import { font } from 'src/assets/font/merienda';

@Component({
  selector: 'carta-detalle',
  templateUrl: './carta-detalle.component.html',
  styleUrls: ['./carta-detalle.component.css'],
})
export class CartaDetalleComponent implements OnInit {
  @ViewChild('printable') printable!: ElementRef;
  cartaAMostrar: string = '';
  lista: Plato[];
  listaVinos: Vino[];
  toggle: boolean = false;
  listaDenominaciones: string[] = [];
  preview: any;

  constructor(
    private route: ActivatedRoute,
    private cartaService: CartaService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.lista = [
      {
        nombre: 'Loading',
        alergenos: [1],
        precioMedia: ' 0',
        precioEntera: ' 0',
      },
    ];
    this.listaVinos = [
      { nombre: 'Loading', denominacion: 'Loading', precio: 0, alergenos: [0] },
    ];
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
    this.listaVinos = this.cartaService.filtrarVinoPorCategoria(
      $event.target.value
    );
  }

  async convertToPdf(title: string = 'Carta') {
    // Crear una instancia de jsPDF
    const doc = new jsPDF();

    const content = this.printable.nativeElement;
    console.log(content);

    const pdfWidth = doc.internal.pageSize.getWidth();
    console.log({ pdfWidth });

    // Convertir y agregar el contenido al PDF, ajustando la escala
    doc.html(content, {
      x: 0,
      y: 0,
      margin: [2, 5, 0, 5],
      width: pdfWidth - 10,
      windowWidth: 790,
      autoPaging: 'text',
      callback: () => doc.save(this.cartaAMostrar + '.pdf'),
    });
  }

  async beautyPDF() {
    const platos = this.lista.map((plato) => {
      return {
        ...plato,
        nombre: this.translateService.instant(
          this.cartaAMostrar + '.' + plato.nombre
        ),
      };
    });
    const doc = new jsPDF();

    // Set custom font
    doc.addFileToVFS('MeriendaOne-Regular.ttf', font);
    doc.addFont('MeriendaOne-Regular.ttf', 'MeriendaOne', 'normal');
    doc.setFont('MeriendaOne');

    // Add image with 60% opacity
    const img = new Image();
    img.src = 'assets/olivo.png';
    doc.setGState(new GState({ opacity: 0.15 }));
    doc.addImage(img, 'JPEG', 20, 10, 50, 70, undefined, undefined, -10);
    doc.setGState(new GState({ opacity: 1 }));

    let y = 40;

    platos.forEach((plato, i) => {
      // Check if y has exceeded page limit and add new page if necessary
      if (y > doc.internal.pageSize.height - 20) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(i === 0 ? 14 : 12);

      // Split plato.nombre into multiple lines if it exceeds max width
      const lines = doc.splitTextToSize(plato.nombre, 80);
      lines.forEach((line: any) => {
        doc.text(line, 20, y);
        y += 10;
      });

      doc.text(
        plato.precioMedia !== 'X' ? `${plato.precioMedia}€` : '',
        110,
        y - 10
      );
      doc.text(
        `${plato.precioEntera}€`,
        plato.precioEntera.length < 20 ? 150 : 110,
        y - 10
      );
      console.log(plato.nombre, plato.precioEntera, plato.precioEntera.length);

      // Add horizontal line
      doc.setLineWidth(0.5);
      doc.line(20, y, 180, y);

      y += 10;
    });

    doc.save(`${this.cartaAMostrar}.pdf`);
  }

  async beautyWinesPDF() {
    const doc = new jsPDF();

    // Set custom font
    doc.addFileToVFS('MeriendaOne-Regular.ttf', font);
    doc.addFont('MeriendaOne-Regular.ttf', 'MeriendaOne', 'normal');
    doc.setFont('MeriendaOne');

    // Add image with 60% opacity
    const img = new Image();
    img.src = 'assets/olivo.png';
    doc.setGState(new GState({ opacity: 0.15 }));
    doc.addImage(img, 'JPEG', 20, 10, 50, 70, undefined, undefined, -10);
    doc.setGState(new GState({ opacity: 1 }));

    let y = 40;

    this.listaVinos.forEach((vino, i) => {
      // Check if y has exceeded page limit and add new page if necessary
      if (y > doc.internal.pageSize.height - 20) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(i === 0 ? 14 : 12);

      // Split plato.nombre into multiple lines if it exceeds max width
      const lines = doc.splitTextToSize(vino.nombre, 80);
      lines.forEach((line: any) => {
        doc.text(line, 20, y);
        y += 10;
      });

      doc.text('', 110, y - 10);
      doc.text(`${vino.precio}€`, 150, y - 10);

      // Add horizontal line
      doc.setLineWidth(0.5);
      doc.line(20, y, 180, y);

      y += 10;
    });

    doc.save(`${this.cartaAMostrar}.pdf`);
  }

  toggler() {
    this.toggle = !this.toggle;
  }
}
