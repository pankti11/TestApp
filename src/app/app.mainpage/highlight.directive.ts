import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';


@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {
    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('#B3E5FC');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('white');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
} 
