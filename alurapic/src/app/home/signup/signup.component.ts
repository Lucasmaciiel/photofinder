import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.services';

@Component({
    templateUrl: './signup.component.html'
})
export class SigUpComponent implements OnInit{

signupForm: FormGroup;
@ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
                private userNotTakenValidatorService: UserNotTakenValidatorService,
                private signupService: SignUpService,
                private router: Router,
                private platformDetectorService: PlatformDetectorService){
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
        this.platformDetectorService.isPlatformBrowser() && 
        this.emailInput.nativeElement.focus();
    
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            );
    }
 
}