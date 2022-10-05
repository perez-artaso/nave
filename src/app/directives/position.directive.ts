import { Directive, ElementRef, Input } from '@angular/core';
import { Square } from '../models/square';

@Directive({
  selector: '[boardPosition]'
})
export class PositionDirective {

  @Input() boardPosition: Square = {} as Square;

  constructor(private el: ElementRef) { 

    //this.el.nativeElement.style["grid-column-start"]

  }

}
