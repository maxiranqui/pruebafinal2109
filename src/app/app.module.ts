import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarRutinaComponent } from './listar-rutina/listar-rutina.component';
import { RutinaComponent } from './rutina/rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListarClienteComponent,
    ListarRutinaComponent,
    RutinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
