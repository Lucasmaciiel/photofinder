import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { homeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    homeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
