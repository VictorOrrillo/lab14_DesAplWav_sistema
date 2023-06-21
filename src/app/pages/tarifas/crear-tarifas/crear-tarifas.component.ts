import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-tarifas',
  templateUrl: './crear-tarifas.component.html',
  styleUrls: ['./crear-tarifas.component.css']
})
export class CrearTarifasComponent {

  tarifaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _tarifaService: TarifaService){
    this.tarifaForm = this.fb.group({
        dia: ['', Validators.required],
        precio: ['', Validators.required]
    })
  }

  agregarTarifa(){
    const TARIFA: Tarifa = {
      dia: this.tarifaForm.get('dia')?.value,
      precio: this.tarifaForm.get('precio')?.value
    }

    console.log(TARIFA)

    Swal.fire({
      title: 'Creacion de Tarifa',
      text: "¿Desea crear esta tarifa?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._tarifaService.guardarTarifa(TARIFA).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-tarifas'])
        }) 
      }
    })

  }

}
