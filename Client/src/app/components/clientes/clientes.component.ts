import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { NgForm } from '@angular/forms';

declare var M:any;


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  	this.getCliente();
  }

  addCliente(form: NgForm){
    if(form.value._id) {
      this.clienteService.putCliente(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        alert('Cliente Actualizado sastifactoriamente');
        this.getCliente();
      });

    }else{     
  	this.clienteService.postCliente(form.value)
  	.subscribe(res =>{
  		this.resetForm(form);
      alert('Cliente Guardado sastifactoriamente');
      this.getCliente();
  	});
    }
  }

  getCliente(){
    this.clienteService.getCliente()
    .subscribe(res =>{
      this.clienteService.clientes = res as Cliente[];
      console.log(res);
    });
  }

  editCliente(cliente: Cliente){
    var nombre = cliente.f_nombre;
    if(confirm('Quieres editar a: ' + nombre)) {
    this.clienteService.selecionarCliente = cliente;
     alert('Estas editando al cliente: ' + nombre);
    }
  }

  deleteCliente(_id:string){
    if(confirm('Estas Seguro que deseas Eliminarlo?')) {
      this.clienteService.deleteCliente(_id)
      .subscribe(res =>{
        this.getCliente();
        alert('Eliminado Sastifactiamente');
      });
    }
  }

  resetForm(form?: NgForm){
  	if(form) {
  		form.reset();
  		this.clienteService.selecionarCliente = new Cliente();
      this.getCliente();
  	}
  }

}
