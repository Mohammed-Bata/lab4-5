import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formWithControls!: FormGroup;
  submittedData: any = null;

  constructor() {
    this.formWithControls = new FormGroup(
      {
        fullname: new FormControl('', [Validators.required, Validators.minLength(5)]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        ]),
        number: new FormControl('', [Validators.required, Validators.pattern('^01[0-9]{9}$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmpassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    console.log(this.formWithControls);
    if (this.formWithControls.valid) {
      this.submittedData = this.formWithControls.value;
      this.formWithControls.reset();
    }
  }
}
