import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './landing/components/header/header.component';
import { SubmenuComponent } from './landing/components/submenu/submenu.component';
import { FooterComponent } from './landing/components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SubmenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SubmenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
