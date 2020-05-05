import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component( {
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder,
                private authService: AuthService){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required], // obrigatorios
        password: ['', Validators.required]
    });

}
login() {
    console.log('vai se autenticar');
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(userName, password)
        .subscribe(
            () => console.log('autenticado'),
            err => {
                console.log(err);
                this.loginForm.reset();
                alert('invalid user name or password');
            }
        );
                
    }

}