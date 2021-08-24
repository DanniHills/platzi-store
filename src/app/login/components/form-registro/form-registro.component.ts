import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {AuthService} from '@core/service/auth.service'
@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
})
export class FormRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) { 
    this.buildFormulario();
  }
  ngOnInit(): void {
   
  }
  registro(event: Event) {
    event.preventDefault();
    if (this.formulario.valid) {
      const value = this.formulario.value;
      this.authService.createUser(value.email, value.password).then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

    private buildFormulario() {
      this.formulario = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
    }  
  }
