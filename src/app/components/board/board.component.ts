import { Component, Input, OnInit } from '@angular/core';
import { BoardArea } from 'src/app/models/board-area';
import { Piece } from 'src/app/models/piece';
import { Square } from 'src/app/models/square';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: Square[] = [];
  @Input() pieces: Piece[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initSquares();
  }

  initSquares () {
    for (let i = 18; i > 0; i--) {
      for (let j = 0; j < 9; j++) {
        this.squares.push(new Square(i, j+1));
      }
    }
  }

}
