import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  vehiculos: Vehiculo[]= [];
  vehiculoSeleccionado:Vehiculo;

  constructor(private vehiculoService :VehiculoService, ) { }

  ngOnInit() {
  }
}
