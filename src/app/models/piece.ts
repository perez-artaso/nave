import { BoardArea } from "./board-area";
import { PieceColor } from "./piece-color";
import { PieceState } from "./piece-state";
import { Square } from "./square";

export class Piece {

    tail_square: Square = {} as Square;
    head_square: Square = {} as Square;
    color: PieceColor;
    state: PieceState = 0;
    
    constructor (t_square: Square, h_square: Square, color: PieceColor, state: PieceState = 0) {
        this.tail_square = t_square;
        this.head_square = h_square;
        this.color = color;
        this.state = state;
    }

    public get_board_area() {

        if ( this.is_facing_north() || this.is_facing_east() ) {

            return new BoardArea(this.tail_square.row, this.head_square.row, this.tail_square.column, this.head_square.column);
            
        } else return new BoardArea(this.head_square.row, this.tail_square.row, this.head_square.column, this.tail_square.column );

    }

    advance () {
        
        if ( this.is_facing_north() ) {

            this.head_square.row += 1;
            this.tail_square.row += 1;

        } else if ( this.is_facing_south() ) {

            this.head_square.row -= 1;
            this.tail_square.row -= 1;

        } else if ( this.head_square.row == this.tail_square.row ) {

            if ( this.is_facing_east() ) {

                this.head_square.column += 1;
                this.tail_square.column += 1;

            } else {

                this.head_square.column -= 1;
                this.tail_square.column -= 1;

            }

        }

    }

    is_facing_north(): boolean {
        return this.head_square.row > this.tail_square.row;
    }

    is_facing_south(): boolean {
        return this.head_square.row < this.tail_square.row;
    }

    is_facing_west(): boolean {
        return this.head_square.column < this.tail_square.column;
    }

    is_facing_east(): boolean {
        return this.head_square.column > this.tail_square.column;
    }

}