import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin:  FormGroup = new FormGroup({});
    isLoged: boolean = false;
    userObject;
    errorEmail: boolean = false;

    constructor(private fb: FormBuilder) {

        
    }

    ngOnInit(): void {
        this.formLogin = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        }); 
    }

    login(email, password) {

        if (email && password) {
            return !this.isLoged;
        } else {
            return this.isLoged;
        }

    }

    testLogin() {

        if (!this.formLogin.controls.email.value) {
            this.errorEmail = !this.errorEmail;
            return;
        }

        this.isLoged = true;

        return {user: 'daniel y andres'};

    }

}
