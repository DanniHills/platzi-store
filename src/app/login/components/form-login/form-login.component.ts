import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.buildForm();
  }
  login(event: Event) {
    event.preventDefault();
    if (this.form.value) {
      
      this.router.navigate(['./home']);
    }}

    private buildForm() {
      this.form = this.formBuilder.group({
        correo: ['', [Validators.required]],
        contraseña: ['', [Validators.required]]
      });
    }  
  }
