import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaDetalleComponent } from './components/carta-detalle/carta-detalle.component';
import { CartaComponent } from './components/carta/carta.component';
import { HomeComponent } from './components/home/home.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'carta/:cartaDetalle', component: CartaDetalleComponent },
  { path: 'horario', component: HorariosComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
