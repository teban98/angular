import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { PantallaBienvenidaComponent } from './pantalla-bienvenida/pantalla-bienvenida.component';



const routes: Routes = [
  {path: 'directiva', component: DirectivaComponent},
  {path: 'pantalla', component: PantallaBienvenidaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'pantalla'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
