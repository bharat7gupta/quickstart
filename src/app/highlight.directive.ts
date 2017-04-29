import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective {
    @Input("highlight") highlightColor: string;

    constructor(private el: ElementRef) {
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener("mouseenter")
    OnMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener("mouseleave")
    OnMouseLeave() {
        this.highlight(null);
    }
}