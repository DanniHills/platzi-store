import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.buildFormulario();
  }
  registro(event: Event) {
    event.preventDefault();
    if (this.formulario.value) {
      
      this.router.navigate(['./home']);
    }}

    private buildFormulario() {
      this.formulario = this.formBuilder.group({
        nombres: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        correo: ['', [Validators.required]],
        contraseña: ['', [Validators.required]]
      });
    }  
  }
