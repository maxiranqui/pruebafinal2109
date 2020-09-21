import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { RutinaComponent } from './rutina/rutina.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarRutinaComponent } from './listar-rutina/listar-rutina.component';

const routes: Routes = [
  { path : 'cliente-component', component: ClienteComponent},
  { path : 'rutina-component', component: RutinaComponent},
  { path : 'listar-rutina-component', component: ListarRutinaComponent},
  { path : 'listar-cliente-component', component: ListarClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
