import { Injectable } from '@angular/core';
import { HttpService } from '../miservicio/http.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private miHttp: HttpService) { }

  BuscarTodos(){
    return this.miHttp.httpGet0('all');
  }
}
