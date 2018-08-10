import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { ClientesComponent } from '../components/clientes/clientes.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

	selecionarCliente: Cliente;
	clientes: Cliente[];
	readonly URL_API = 'http://localhost:8080/api/clients/';

  constructor(private http: HttpClient) {
    this.selecionarCliente = new Cliente();
  }

  getCliente(){
  	return this.http.get(this.URL_API);
  }

  postCliente(Cliente: Cliente){
  	return this.http.post(this.URL_API, Cliente);
  }

  putCliente(cliente: Cliente){
  	return this.http.put(this.URL_API + `/${cliente. _id}`, cliente);
  }

  deleteCliente(_id:string){
  	return this.http.delete(this.URL_API + `/${_id}`);
  }
}
