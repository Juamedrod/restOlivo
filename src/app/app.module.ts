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
import { RouterModule } from '@angular/router';
import { AlergenosComponent } from './components/alergenos/alergenos.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartaComponent,
    CartaDetalleComponent,
    HorariosComponent,
    InfoComponent,
    AlergenoComponent,
    AlergenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
