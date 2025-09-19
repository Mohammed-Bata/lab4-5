import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formWithControls!: FormGroup;
  submittedData: any = null;
  constructor() {
    this.formWithControls = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    console.log(this.formWithControls);
    if (this.formWithControls.valid) {
      this.submittedData = this.formWithControls.value;
      this.formWithControls.reset();
    }
  }
}
