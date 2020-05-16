import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{ 

    @Input() brightness = '70%';
    
    constructor(private el: ElementRef, private render: Renderer){
        
    }
  
    @HostListener('mouseover')
    darkenOn() {
        //console.log('passou o mouse');
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
    }
    @HostListener('mouseleave')
    darkenOff() {
        //console.log('tirou o mouse');
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
    
}