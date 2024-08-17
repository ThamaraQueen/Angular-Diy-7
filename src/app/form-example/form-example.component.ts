import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', [Validators.required, Validators.minLength(5)]],
      note: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  
  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get country() {
    return this.form.get('country');
  }

  get note() {
    return this.form.get('note');
  }

  onSubmit() {
    if (this.form.valid) {
      console.warn(this.form.value);
    } else {
      console.warn('Form is invalid');
    }
  }

  onReset() {
    this.form.reset();
  }
}
