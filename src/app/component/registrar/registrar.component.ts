import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import { Router} from '@angular/router';




@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  vehiculos: Vehiculo [];

  vehiculo: Vehiculo = new Vehiculo();

  constructor(private vehiculoService: VehiculoService, private router: Router) { }

  ngOnInit() {
  }
  insert() {
    this.vehiculoService.insert(this.vehiculo).subscribe(
      _ => {
        this.router.navigate(['/listar']);
      }
    )
  }

}
