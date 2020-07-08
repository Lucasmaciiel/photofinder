import { debounceTime, switchMap, first, map } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return (control: AbstractControl) => {
                return control
                    .valueChanges
                    .pipe(debounceTime(300))
                    .pipe(switchMap(userName =>
                        this.signUpService.checkUserNameTaken(userName)
                    ))
                    .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                    .pipe(first());
              }    
             }
    }
}