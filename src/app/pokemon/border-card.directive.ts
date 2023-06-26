import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmonBorderCard]'
})
export class BorderCardDirective {

  //private initialColor:

  constructor(private el: ElementRef) { 
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }
  @Input('pkmonBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px'; 
  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

}
