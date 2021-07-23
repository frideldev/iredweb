import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { ExpertoComponent } from './pages/experto/experto.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'inicio',component:InicioComponent},
      {path:'about',component:AboutComponent},
      {path:'directory',component:DirectoryComponent},
      {path:'experto/:id',component:ExpertoComponent},
      {path:'formulario',component:FormularioComponent},
      {path:'**',redirectTo:'about'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
