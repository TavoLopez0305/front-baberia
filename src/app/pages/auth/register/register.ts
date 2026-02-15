import { Component, inject} from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  standalone: true,
})
export class Register {

  private fb = inject(FormBuilder);

  registerForm: FormGroup = this.fb.group({
    first_name: ['',[Validators.required,]],
    last_name: ['',[Validators.required,]],
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]],
  });

  campoInvalido(campo: string): boolean {
    const control = this.registerForm.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  enviar(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    } 

    console.log('data del login', this.registerForm.value);
  }
}
