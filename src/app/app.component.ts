import { Component } from '@angular/core';
import { Piece } from './models/piece';
import { PieceSet } from './models/piece-set';
import { Square } from './models/square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  piece_set: PieceSet = new PieceSet();
  pieces: Piece[] = [];

  constructor() {

    this.piece_set.set_initial_position();
    this.pieces = this.piece_set.black_pieces.concat(this.piece_set.red_pieces);

  }


}