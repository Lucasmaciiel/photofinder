import { NgModule } from '@angular/core';
import { SignInComponent } from './sigin/signin.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SigUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SignInComponent,
        SigUpComponent],
   imports: [
       ReactiveFormsModule,
       CommonModule,
       FormsModule,
       VMessageModule,
       RouterModule
    ]
})
export class homeModule {}

