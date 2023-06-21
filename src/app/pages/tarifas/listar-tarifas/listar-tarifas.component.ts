import { Component, OnInit } from '@angular/core';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/services/tarifa.service';
import Swal from 'sweetalert2'

//Libreria para crear el pdf
import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-tarifas',
  templateUrl: './listar-tarifas.component.html',
  styleUrls: ['./listar-tarifas.component.css']
})
export class ListarTarifasComponent implements OnInit{

  listTarifas: Tarifa[] = []
  elementos : number = 0;

  constructor(private _tarifaService: TarifaService) {

  }
  
  ngOnInit(): void {
    this.obtenerTarifas();
  }

  openPdfTables() {
    const documentDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [
              [{ text: 'Dia', bold: true }, { text: 'Precio', bold: true }],
              ...this.listTarifas.map(tarifa => [tarifa.dia, tarifa.precio])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  obtenerTarifas(){
    this._tarifaService.getTarifas().subscribe(data => {
      console.log(data);
      this.listTarifas = data;
      this.elementos = this.listTarifas.length;

    });
  }

  eliminarTarifas(id: any){
    Swal.fire({
      title: 'Eliminacion de Tarifas',
      text: "¿Desea eliminar esta tarifa?",
      icon: 'info',
      showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._tarifaService.deleteTarifa(id).subscribe(data => {
          console.log(data);
          this.obtenerTarifas();
          this.elementos = this.listTarifas.length;
        });
      }
    });
  }

}
