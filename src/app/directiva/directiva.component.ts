import { Component, OnInit } from '@angular/core';

import { Estudiante } from '../estudiante';


@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  aprobo: boolean;
  textAprobo: string;

  estudiantes: Estudiante[] =
  [
    {codigo: 1, nombre: 'Ledier', apellido: 'Marin', nota: 1.2 },
    {codigo: 2, nombre: 'Leydi', apellido: 'Gomez', nota: 2.2 },
    {codigo: 3, nombre: 'Sebastian', apellido: 'Sanchez', nota: 4.0 },
    {codigo: 4, nombre: 'Andres', apellido: 'Castaño', nota: 4.2 },
    {codigo: 5, nombre: 'Margarita', apellido: 'Florez', nota: 4.6 },
    {codigo: 6, nombre: 'Daniel', apellido: 'Zuluaga', nota: 1.8 },
    {codigo: 7, nombre: 'Juanito', apellido: 'Perez', nota: 3.2 },
    {codigo: 8, nombre: 'Alexandra', apellido: 'Ramirez', nota: 4.8 },
    {codigo: 9, nombre: 'Susana', apellido: 'Reyes', nota: 2.9 },
    {codigo: 10, nombre: 'Santiago', apellido: 'Maso', nota: 4.4},
   ]



  constructor() {}

  ngOnInit(): void {
}
// tslint:disable-next-line: ban-types

  }



