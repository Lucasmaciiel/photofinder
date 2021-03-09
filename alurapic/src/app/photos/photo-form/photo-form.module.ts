import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [ PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule
  ]
})
export class PhotoFormModule { }
