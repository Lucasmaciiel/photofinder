import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/photos/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { CardModule } from '../shared/components/card/card.module';

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
        CommonModule
    ],
  
})
export class PhotosModule {}