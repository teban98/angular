import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { PantallaBienvenidaComponent } from './pantalla-bienvenida/pantalla-bienvenida.component';
import { Menu1Component } from './menu1/menu1.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,

    PantallaBienvenidaComponent,

    Menu1Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
