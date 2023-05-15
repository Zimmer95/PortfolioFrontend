import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const email = this.Email?.value;
      const password = this.Password?.value;
      if (email && password) {
        this.authService.iniciarSesion(email, password).subscribe((token: string) => {
          console.log('Token recibido: ' + token);
          this.ruta.navigate(['/portfolio']);
        });
      }
    }
  }
}