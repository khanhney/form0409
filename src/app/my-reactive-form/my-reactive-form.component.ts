import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: this.fb.control('abcd', Validators.required),
      password: ''
    });
  }

  get txtEmail() {
    return this.formSignIn.controls.email;
  }

  onSubmit() {
    console.log(this.formSignIn);
  }
}
