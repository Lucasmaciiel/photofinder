import { NgModule } from '@angular/core';
import { SignInComponent } from './sigin/signin.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SigUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        SignInComponent,
        SigUpComponent,
        HomeComponent
    ],
   imports: [
       ReactiveFormsModule,
       CommonModule,
       FormsModule,
       VMessageModule,
       RouterModule,
       HomeRoutingModule
    ]
})
export class homeModule {}

