import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import {Cliente} from 'src/app/clases/cliente';
import {ClienteComponent} from 'src/app/cliente/cliente.component';
import {ServicioService} from 'src/app/servicio/servicio.service';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  displayedColumns: string [] = [ 'nombre' , 'apellido' , 'telefono' , 'direccion', 'fechaNacimiento','editar', 'agregar'];
  dataSource : any[] = [];
  param : any;
  parm : any;
  constructor(private route: ActivatedRoute, private router : Router, private servicioService : ServicioService) { }

  ngOnInit(): void {
    this.getClientes();
  }
  getClientes(){
    this.servicioService.getClientes().subscribe((clientes)=>{
      debugger;
      this.dataSource = clientes;

      this.param = this.route.snapshot.params;
      if (Object.keys(this.param).length){
        this.recibirCliente(this.param);
      }
    });
    
  }
  recibirCliente(cliente : ClienteComponent){
    debugger;
    this.dataSource.push(cliente);
  }
  editar(cliente) {	
    let clienteTemp : Cliente = {
      nombre : cliente.nombre,
      apellido : cliente.apellido,
      telefono : cliente.telefono,
      direccion : cliente.direccion,
      fechaNacimiento : cliente.fechaNacimiento
    }

    this.router.navigate(['/cliente-component', cliente]);
    debugger;	
  }

  agregar(rutina) {
    this.router.navigate(['/rutina-component', rutina]);
    debugger;	
  }

}
