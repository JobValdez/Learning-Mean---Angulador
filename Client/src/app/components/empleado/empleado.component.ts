import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { NgForm } from '@angular/forms';

declare var M:any;

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  addEmpleado(form: NgForm){
    if(form.value._id) {
      this.empleadoService.putEmpleado(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        alert('Empleado Actualizado sastifactoriamente');
        this.getEmpleados();
      });

    }else{     
  	this.empleadoService.postEmpleado(form.value)
  	.subscribe(res =>{
  		this.resetForm(form);
  		alert('Empleado Guardado sastifactoriamente');
      this.getEmpleados();
  	});
    }
  }

  getEmpleados(){
    this.empleadoService.getEmpleado()
    .subscribe(res =>{
      this.empleadoService.empleados = res as Empleado[];
      console.log(res);
    });
  }

  editEmpleado(empleado: Empleado){
    var nombre = empleado.f_name;
    if(confirm('Quieres editar a: ' + nombre)) {
    this.empleadoService.selecionarEmpleado = empleado;
    alert('Estas editando al cliente: ' + nombre);
    }
  }

  deleteEmpleado(_id:string){
    if(confirm('Estas Seguro que deseas Eliminarlo?')) {
      this.empleadoService.deleteEmpleado(_id)
      .subscribe(res =>{
        this.getEmpleados();
        alert('Eliminado Sastifactiamente');
      });
    }
  }

  resetForm(form?: NgForm){
  	if(form) {
  		form.reset();
  		this.empleadoService.selecionarEmpleado = new Empleado();
      this.getEmpleados();
  	}
  }

}
