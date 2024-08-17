# DIY 7

This exercise demonstrates the implementation of a form using Angular's Reactive Forms. The form includes fields for first name, last name, country, and a note, each with custom validation rules. The goal is to ensure that:

* __First Name:__ Must be at least 2 characters long.
* __Last Name:__ Must be at least 2 characters long.
* __Country:__ Must be at least 5 characters long.
* __Note:__ Must be at least 10 characters long.  

The form provides real-time validation feedback and includes two buttons:  

* __Submit__: Logs the form values to the console if the form is valid.
* __Reset:__ Clears all input fields.

## STEP 1: Create a Component

In your Angular project, create a new component:

```bash
ng generate component form-example
```

## STEP 2: Modify the `form-example.component.ts`

This component sets up a reactive form using Angular’s `FormBuilder`. The form includes validation rules for each field, with methods to handle form submission and resetting. The code also uses getter methods for cleaner access to form controls in the template. This setup allows for real-time validation feedback and efficient form management in Angular.

```ts
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

```

## STEP 3: Update the component's HTML

Update the HTML file (`form-example.component.html`) to include the form:

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
    <div>
      <label for="firstName">First Name:</label>
      <input id="firstName" formControlName="firstName" />
      <div *ngIf="firstName?.invalid && firstName?.touched">
        <small>First name must be at least 2 characters long.</small>
      </div>           
    </div>
  
    <div>
      <label for="lastName">Last Name:</label>
      <input id="lastName" formControlName="lastName" />
      <div *ngIf="lastName?.invalid && lastName?.touched">
        <small>Last name must be at least 2 characters long.</small>
      </div>
    </div>
  
    <div>
      <label for="country">Country:</label>
      <input id="country" formControlName="country" />
      <div *ngIf="country?.invalid && country?.touched">
        <small>Country must be at least 5 characters long.</small>
      </div>
    </div>
  
    <div>
      <label for="note">Note:</label>
      <textarea id="note" formControlName="note"></textarea>
      <div *ngIf="note?.invalid && note?.touched">
        <small>Note must be at least 10 characters long.</small>
      </div>
    </div>
  
    <button type="submit" [disabled]="form.invalid">Submit</button>
    <button type="button" (click)="onReset()">Reset</button>
  </form>
```

## STEP 5: Make sure your module imports ReactiveFormsModule:

In your `app.module.ts`, ensure you have:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## How It Works: 

* The form uses Angular's Reactive Forms API.
* The `Validators.minLength` checks ensure each field meets the minimum character requirement.
* The "Submit" button is disabled if the form is invalid.
* The "Reset" button clears all the form fields.  

This setup will provide the form validation, submission, and reset functionality you requested.