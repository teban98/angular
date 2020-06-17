import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListarComponent } from './component/listar/listar.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { EditarComponent } from './component/editar/editar.component';





const routes: Routes = [
  {path: 'editar', component:EditarComponent },
  {path: 'registrar', component:RegistrarComponent },
  {path: 'listar', component:ListarComponent },
  {path: 'home', component: HomeComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
