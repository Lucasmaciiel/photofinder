import { NgModule } from '@angular/core';
import { SignInComponent } from './sigin/signin.component';
import { ReactiveFormsModule  } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [SignInComponent],
   imports: [
       ReactiveFormsModule,
       CommonModule,
       VMessageModule 
    ]
})
export class homeModule {}

