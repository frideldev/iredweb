import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExpertosModel } from '../models/expertos.model';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ExpertoService {
  

  constructor(private http:HttpClient) { }
  cargarListaExpertos(){
    const url =`${base_url}/users?per_page=8`;
    return this.http.get<ExpertosModel[]>(url).pipe(
      map((resp:any)=>resp.data)
    );
  }
  cargarExpertoporID(id:string){
    const url =`${base_url}/users/${id}`;
    return this.http.get<ExpertosModel>(url).pipe(
      map((resp:any)=>resp.data));
  }
}
