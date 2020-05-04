import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component( {
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required], // obrigatorios
        password: ['', Validators.required]
    })
    }

}