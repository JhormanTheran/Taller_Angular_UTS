import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { PublicacionesComponent } from './paginas/publicaciones/publicaciones.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'publicaciones', component: PublicacionesComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Página por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
