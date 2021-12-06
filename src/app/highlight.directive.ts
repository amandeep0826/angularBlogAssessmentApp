import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: any

  constructor(private element: ElementRef) {
    // console.log("Yay!!!! We got the element!! Lets party", this.element.nativeElement)
  }

  ngOnInit() {

  }

  @HostListener('mouseenter') doThis() {
    this.element.nativeElement.classList.add("zoom1")
  }

  @HostListener('mouseleave') doThat() {
    this.element.nativeElement.classList.remove("zoom1")
  }

}
