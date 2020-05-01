import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-bienvenida',
  templateUrl: './pantalla-bienvenida.component.html',
  styleUrls: ['./pantalla-bienvenida.component.css']
})
export class PantallaBienvenidaComponent implements OnInit {

  constructor() { }

  horaActual(): Date {
    const momentoActual: Date = new Date();
    return(momentoActual);
  }
  ngOnInit() {
  }

}
