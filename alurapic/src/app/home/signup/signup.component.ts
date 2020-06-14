import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.services';

@Component({
    templateUrl: './signup.component.html'
})
export class SigUpComponent implements OnInit{

signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private userNotTakenValidatorService: UserNotTakenValidatorService){
    }
    
    ngOnInit(): void {
        
        this.signupForm = this.formBuilder.group({
            email: ['', 
            [ 
                Validators.required, 
                Validators.email
            ]],
            userName: ['', 
            [ 
                Validators.required, 
                Validators.minLength(2),
                Validators.maxLength(40)
            ],
            this.userNotTakenValidatorService.checkUserNameTaken()
        ],
            fullName: ['', 
            [ 
                Validators.required,
                lowerCaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30)
            ]],
            password: ['', 
            [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]]
        });
    
    }
 
}