import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators'

@Injectable( { providedIn: 'root'})
export class UserNotTakenValidatorService{

    constructor(private signupService: SignUpService){}

    checkUserNameTaken(){
        return (control: AbstractControl) => {
            return control.valueChanges
                   .pipe(debounceTime(300))
                   .pipe(switchMap(userName =>
                        this.signupService.checkUserNameTaken(userName)
                    ))
                    .pipe(map(istaken => istaken ? {userNameTaken: true} : null))
                    .pipe(first());
        }
    }
}