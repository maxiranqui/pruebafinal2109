import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Rutina} from 'src/app/clases/rutina';
import {RutinaComponent} from 'src/app/rutina/rutina.component';
import {ServicioService} from 'src/app/servicio/servicio.service';
@Component({
  selector: 'app-listar-rutina',
  templateUrl: './listar-rutina.component.html',
  styleUrls: ['./listar-rutina.component.css']
})
export class ListarRutinaComponent implements OnInit {
  displayedColumns: string [] = ['rutina', 'repeticiones','peso'];
  dataSource : any[] = [];

  param : any;
  parm : any;
  constructor(private route: ActivatedRoute, private router : Router, private servicioService : ServicioService) { }

  ngOnInit(): void {
  }
  getRutinas(){
    this.servicioService.getRutinas().subscribe((rutinas)=>{
      debugger;
      this.dataSource = rutinas;

      this.param = this.route.snapshot.params;
      if (Object.keys(this.param).length){
        this.recibirRutina(this.param);
      }
    });
  }

  recibirRutina(rutina : RutinaComponent){
    debugger;
    this.dataSource.push(rutina);
  }

  editar(rutina) {	
    let rutinaTemp : Rutina = {
      rutina : rutina.rutina,
      repeticiones : rutina.repeticiones,
      peso : rutina.peso
    }

    this.router.navigate(['/rutina-component', rutina]);
    debugger;	
  }
}
