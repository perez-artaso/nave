import { Piece } from "./piece";
import { Square } from "./square";

export class PieceSet {

    private pieces_per_side = 5;

    black_pieces: Piece[] = [];
    red_pieces: Piece[] = [];

    constructor () {

        for (let i = 0; i < this.pieces_per_side; i++) {

            this.black_pieces.push(
                new Piece( new Square(0, 0), new Square(0, 0), 0, 0 )
            );

            this.red_pieces.push(
                new Piece( new Square(0, 0), new Square(0, 0), 1, 0 )
            );
            
        }

    }

    set_initial_position () {
        this.black_pieces[0] = new Piece( new Square(1, 1), new Square(2, 1), 0, 0 );
        this.black_pieces[1] = new Piece( new Square(4, 3), new Square(5, 3), 0, 0 );
        this.black_pieces[2] = new Piece( new Square(5, 5), new Square(6, 5), 0, 0 );
        this.black_pieces[3] = new Piece( new Square(4, 7), new Square(5, 7), 0, 0 );
        this.black_pieces[4] = new Piece( new Square(1, 9), new Square(2, 9), 0, 0 );

        this.red_pieces[0] = new Piece( new Square(18, 1), new Square(17, 1), 1, 0 );
        this.red_pieces[1] = new Piece( new Square(15, 3), new Square(14, 3), 1, 0 );
        this.red_pieces[2] = new Piece( new Square(14, 5), new Square(13, 5), 1, 0 );
        this.red_pieces[3] = new Piece( new Square(15, 7), new Square(14, 7), 1, 0 );
        this.red_pieces[4] = new Piece( new Square(18, 9), new Square(17, 9), 1, 0 );
    }

}