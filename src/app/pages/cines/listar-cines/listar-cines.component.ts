import { Component, OnInit } from '@angular/core';
import { Cine } from 'src/app/models/cine';
import { CineService } from 'src/app/services/cine.service';
import Swal from 'sweetalert2'

//Libreria para crear el pdf
import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-cines',
  templateUrl: './listar-cines.component.html',
  styleUrls: ['./listar-cines.component.css']
})
export class ListarCinesComponent implements OnInit{

  listCines: Cine[] = []
  elementos : number = 0;

  constructor(private _cineService: CineService) {

  }
  
  ngOnInit(): void {
    this.obtenerCines();
  }

  openPdfTables() {
    const documentDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [
              [{ text: 'Nombre', bold: true }, { text: 'Calle', bold: true }, { text: 'Numero', bold: true }, { text: 'Telefono', bold: true }, { text: 'Dia', bold: true }, { text: 'Tarifa', bold: true }],
              ...this.listCines.map(cine => [cine.nombre, cine.calle, cine.numero, cine.telefono, cine.dia, cine.id_tarifa])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  obtenerCines(){
    this._cineService.getCines().subscribe(data => {
      console.log(data);
      this.listCines = data;
      this.elementos = this.listCines.length;

    });
  }

  eliminarCine(id: any){
    Swal.fire({
      title: 'Eliminacion de Producto',
      text: "¿Desea eliminar este cine?",
      icon: 'info',
      showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._cineService.deleteCine(id).subscribe(data => {
          console.log(data);
          this.obtenerCines();
          this.elementos = this.listCines.length;
        });
      }
    });
  }

}
