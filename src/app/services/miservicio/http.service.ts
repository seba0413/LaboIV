import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private url = 'https://restcountries.eu/rest/v2/';

  public httpGet0( metodo: string): Observable<any> {
    return this.http.get(this.url + metodo)
    .pipe(respuesta => respuesta)
  }
}
