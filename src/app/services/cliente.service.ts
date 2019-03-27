import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = "http://localhost:8080/v1/cliente";

  constructor(private http: HttpClient) { }

  public saveCliente(cliente: any){

    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, params, {headers});
  }
}
