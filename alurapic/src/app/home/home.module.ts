import { NgModule } from '@angular/core';
import { SignInComponent } from './sigin/signin.component';
import { ReactiveFormsModule  } from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SignInComponent],
   imports: [
       ReactiveFormsModule,
       CommonModule]
})
export class homeModule {}

