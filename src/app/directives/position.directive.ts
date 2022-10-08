import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BoardArea } from '../models/board-area';

@Directive({
  selector: '[boardPosition]'
})
export class PositionDirective implements OnChanges{

  @Input() boardPosition: BoardArea = {} as BoardArea;

  constructor(private el: ElementRef) { 

    this.el.nativeElement.style["grid-column-start"] = this.boardPosition.column_a;
    this.el.nativeElement.style["grid-column-end"] = this.boardPosition.column_b + 1;
    this.el.nativeElement.style["grid-row-start"] = this.boardPosition.row_a;
    this.el.nativeElement.style["grid-row-end"] = this.boardPosition.row_a + 1;    

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style["grid-column-start"] = -10 + (changes.boardPosition.currentValue.column_a - 1);
    this.el.nativeElement.style["grid-column-end"] = -10 + (changes.boardPosition.currentValue.column_a);
    this.el.nativeElement.style["grid-row-start"] = -(changes.boardPosition.currentValue.row_a);
    this.el.nativeElement.style["grid-row-end"] = -(changes.boardPosition.currentValue.row_b) - 1;
  }

}
