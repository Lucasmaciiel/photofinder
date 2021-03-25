import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';


@NgModule({
    declarations: [
       
        
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        HttpClientModule,
        CommonModule,
        PhotoDetailsModule
    ],
  
})
export class PhotosModule {}