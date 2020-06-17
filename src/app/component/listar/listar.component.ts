import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../model/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

    vehiculos: Vehiculo[];
    vehiculoSeleccionado: Vehiculo;

  constructor(private vehiculoService: VehiculoService, private router: Router) { }

  ngOnInit() {
    this.vehiculoService.listar().subscribe(
      (vehiculos) => {
        this.vehiculos = vehiculos;
      }
      );
    }
    showModal(vehiculo: Vehiculo) {
      this.vehiculoSeleccionado = vehiculo;

    }
     eliminar(id: string) {
       this.vehiculoService.eliminar(id).subscribe(
         _ => {
          this.vehiculos.filter(vehiculo => vehiculo !== this.vehiculoSeleccionado
          );
         }
       );
     }

}
