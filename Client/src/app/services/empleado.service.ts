import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { EmpleadoComponent } from '../components/empleado/empleado.component';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

	selecionarEmpleado: Empleado;
	empleados: Empleado[];
	readonly URL_API = 'http://localhost:8080/api/employees/';

  constructor(private http: HttpClient) {
    this.selecionarEmpleado = new Empleado();
  }

  getEmpleado(){
  	return this.http.get(this.URL_API);
  }

  postEmpleado(Empleado: Empleado){
  	return this.http.post(this.URL_API, Empleado);
  }

  putEmpleado(empleado: Empleado){
  	return this.http.put(this.URL_API + `/${empleado. _id}`, empleado);
  }

  deleteEmpleado(_id:string){
  	return this.http.delete(this.URL_API + `/${_id}`);
  }
}
