import { PieceState } from "./piece-state";
import { Square } from "./square";

export class Piece {

    bottom_square: Square = {} as Square;
    head_square: Square = {} as Square;
    state: PieceState = 0;

    constructor (b_square: Square, h_square: Square, state: PieceState = 0) {
        this.bottom_square = b_square;
        this.head_square = h_square;
        this.state = state;
    }

}