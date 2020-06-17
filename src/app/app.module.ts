import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { ListarComponent } from './component/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditarComponent } from './component/editar/editar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListarComponent,
    RegistrarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
