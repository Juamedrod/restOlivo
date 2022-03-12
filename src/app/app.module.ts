import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartaComponent } from './components/carta/carta.component';
import { CartaDetalleComponent } from './components/carta-detalle/carta-detalle.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { InfoComponent } from './components/info/info.component';
import { AlergenoComponent } from './components/alergeno/alergeno.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartaComponent,
    CartaDetalleComponent,
    HorariosComponent,
    InfoComponent,
    AlergenoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
