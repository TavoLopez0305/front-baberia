import { Component, inject} from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
})
export class Login {

  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]],
  });

  enviar(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    } 

    console.log('data del login', this.loginForm.value);
  }

}
