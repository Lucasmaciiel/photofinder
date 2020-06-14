import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/user/user';

const API_URL = "http://localhost:3000"
@Injectable({ providedIn: 'root'})
export class SignUpService {
     
    constructor(private http: HttpClient){}

    checkUserNameTaken(userName: string){

        return this.http.get(API_URL + '/user/exists' + userName);
    }

}