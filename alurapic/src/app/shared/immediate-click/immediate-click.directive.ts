import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "src/app/core/plataform-detector/platform-detector.service";

@Directive({
    selector: '[immediateClick]'
})
export class immediateClickDirective implements OnInit {

    constructor(private element: ElementRef<any>, private platformDetector: PlatformDetectorService){

    }
    ngOnInit(): void {
        this.platformDetector.isPlatformBrowser && this.element.nativeElement.click();
    }

}