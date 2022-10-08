import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BoardArea } from 'src/app/models/board-area';
import { Piece } from 'src/app/models/piece';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit, OnChanges {

  @Input() piece: Piece | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
