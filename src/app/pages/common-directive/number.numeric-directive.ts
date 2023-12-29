import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[numericOnly]'
})
export class NumbersDirective {

    constructor(public el: ElementRef) {

        this.el.nativeElement.onkeypress = (evt: any) => {
            if (evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        };
    }
}