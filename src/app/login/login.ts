import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formWithControls!: FormGroup;
  submittedData: any = null;
  errorMessage = '';
  private authservice = inject(Auth);
  private router = inject(Router);
  constructor() {
    this.formWithControls = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    console.log(this.formWithControls);
    if (this.formWithControls.valid) {
      this.submittedData = this.formWithControls.value;

      let username = this.submittedData.username;
      let password = this.submittedData.password;

      this.authservice.login('emilys', 'emilyspass').subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/products']);
        },
        error: (err) => {
          this.errorMessage = 'Invalid username or password';
          console.log(err.error?.message);
        },
      });

      this.formWithControls.reset();
    }
  }
}
