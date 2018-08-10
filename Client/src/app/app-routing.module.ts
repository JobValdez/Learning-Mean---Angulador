import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { RegisterComponent} from './components/register/register.component';
import { EmpleadoComponent} from './components/empleado/empleado.component';
import { ClientesComponent} from './components/clientes/clientes.component';
import { RouterEmpleado } from '../../.././router/employee.routes';
import { RouterCliente } from '../../.././router/client.routes';



const appRoutes: Routes = [
  {
   path: 'home',
   component: HomeComponent
  },
  {
   path: 'dashboard',
   component: DashboardComponent
  },
  {
   path: 'register',
   component: RegisterComponent
  },
  {
   path: 'empleado',
   component: EmpleadoComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },

  { path: '**', component: DashboardComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }