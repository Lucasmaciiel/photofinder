import { Injectable, PLATFORM_ID, inject, Inject } from '@angular/core';
import { isPlatformBrowser } from "@angular/common";

@Injectable( { providedIn: 'root'})
export class PlatformDetectorService {

   constructor(@Inject(PLATFORM_ID) private platformId: string) {}

   isPlatformBrowser(){
        return isPlatformBrowser(this.platformId);
   }

}