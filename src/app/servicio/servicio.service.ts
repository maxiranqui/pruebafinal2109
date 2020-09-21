import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpCliente : HttpClient) { }

  getClientes(): Observable<any>{
    return this.httpCliente.get('./../assets/cliente.json');
  }
  getRutinas(): Observable<any>{
    return this.httpCliente.get('./../assets/rutina.json');
  }
}
