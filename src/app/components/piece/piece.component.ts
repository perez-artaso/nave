import { Component, Input, OnInit } from '@angular/core';
import { Piece } from 'src/app/models/piece';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input() piece: Piece = {} as Piece;

  constructor() { }

  ngOnInit(): void {
  }

}
