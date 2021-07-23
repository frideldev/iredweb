import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {
  personalDetails!: FormGroup;
  apoyanosDetails!: FormGroup;
  personal_step = false;
  apoyanos_step = false;
  step = 1;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      correo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidop: ['',Validators.required],
      ciudad: ['',Validators.required],
      pais: ['',Validators.required],
      celular: ['',Validators.required],
      correoa: ['',Validators.required],
      web: ['',Validators.required],
      tipoexperto: ['',Validators.required]
  });
  this.apoyanosDetails = this.formBuilder.group({
      orders: ['', Validators.required]
  });
  }
  get personal() { return this.personalDetails.controls; }
  get apoyanos() { return this.apoyanosDetails.controls; }
 previo(){
  
   this.step=this.step-1;
 }
 siguiente(){
  if (this.personalDetails.invalid) { return  }
  this.step=this.step+1;
 }
submit(){
  
}

}
