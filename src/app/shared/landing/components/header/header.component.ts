import { Component,Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  texto: string ="active";
  estadoactive:boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document) { 
  }

  ngOnInit(): void {
  }
  cambiaEstado(){
     this.texto=(this.estadoactive)?"":"active";
     this.estadoactive=!this.estadoactive;
   }
   darkMode(){
      this.document.body.classList.toggle('dark');
  }
}
