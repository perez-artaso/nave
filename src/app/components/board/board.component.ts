import { Component, Input, OnInit } from '@angular/core';
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

  somePiece: Piece = new Piece (new Square(2, 2), new Square(3, 2), 0);

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
