import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Cliente} from 'src/app/clases/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clienteForm: FormGroup;

  cliente : any;
  param: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    debugger;		
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.cliente = this.param;
    } 

    this.initForm(this.cliente);
  }
  nombreControl = new FormControl('Cliente');
  initForm(modificar : Cliente){   
    this.clienteForm = this.fb.group({
        nombre : [modificar ? modificar.nombre: '', Validators.required],
        apellido : [modificar ? modificar.apellido:'', Validators.required],
        telefono : [modificar ? modificar.telefono: ''],
        direccion : [modificar ? modificar.direccion: ''],
        fechaNacimiento : [modificar ? modificar.fechaNacimiento:'', Validators.required]
    });
  }

  subir(){
    let clienteTemp : Cliente = this.clienteForm.value;
    this.router.navigate(['listar-cliente-component', clienteTemp]);
    debugger;
  };
}
