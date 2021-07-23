import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ExpertoComponent } from './pages/experto/experto.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    DirectoryComponent,
    ExpertoComponent,
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    InicioComponent,
    AboutComponent,
    DirectoryComponent,
    ExpertoComponent,
    FormularioComponent
  ]
})
export class LandingModule { }
