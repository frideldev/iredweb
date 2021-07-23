import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpertosModel } from '../../models/expertos.model';
import { ExpertoService } from '../../services/experto.service';

@Component({
  selector: 'app-experto',
  templateUrl: './experto.component.html',
  styles: [
  ]
})
export class ExpertoComponent implements OnInit {
   public nombreExperto!: string;
   public apellidoExperto!: string;
   public avatarExperto!: string;
  constructor(private activatedRouter:ActivatedRoute,private expertosServices:ExpertoService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({id})=>{
      this.expertosServices.cargarExpertoporID(id).subscribe(resp=>{
       const {first_name,last_name,avatar}=resp;
        this.nombreExperto=first_name;
        this.apellidoExperto=last_name;
        this.avatarExperto=avatar;
      })
    })
  }

}
