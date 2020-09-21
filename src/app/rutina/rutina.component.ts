import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Rutina} from 'src/app/clases/rutina';
@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {
  rutinaForm : FormGroup;
  parm: any;
  rutina : any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.parm = this.route.snapshot.params;

    if (Object.keys(this.parm).length) {
      this.rutina = this.parm;
    } 

    this.initForm(this.rutina);
  }
  nombreControl = new FormControl('Rutina');

  initForm(modificar : Rutina){
    this.rutinaForm = this.fb.group({
        rutina : ['', Validators.required],
        repeticiones : ['', Validators.required],
        peso : ['', Validators.required]
      });
    }

  subir(){
    let rutinaTemp : Rutina = this.rutinaForm.value;
    this.router.navigate(['listar-rutina-component', rutinaTemp]);
    debugger;
  };

}
