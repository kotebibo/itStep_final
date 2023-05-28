import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.registerForm.valid) {
      fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
        "userName": "keti4",
        "firstName": "keti4",
        "lastName": "ketelauri4",
        "email": "keti4@gmail.com",
        "privateNumber": "12345678914",
        "password": "123",
        "active": true})
    })
    }
  }
}