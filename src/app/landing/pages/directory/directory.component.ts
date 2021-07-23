import { Component, OnInit } from '@angular/core';
import { ExpertosModel } from '../../models/expertos.model';
import { ExpertoService } from '../../services/experto.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styles: [
  ]
})
export class DirectoryComponent implements OnInit {
   public experto:ExpertosModel[]=[];
   texto: string ="active";
  estadoactive:boolean=false;
  constructor(private expertosService:ExpertoService) { }

  ngOnInit(): void {
    //Servicio dentro de services experto.service: Listado de Cards
    this.expertosService.cargarListaExpertos().subscribe(
      resp=>{this.experto=resp}
    );
  }
  //Toggle de Boton Search
  cambiaEstado(){
    this.texto=(this.estadoactive)?"":"active";
    this.estadoactive=!this.estadoactive;
  }

}
