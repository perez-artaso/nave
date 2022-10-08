import { BoardArea } from "./board-area";

export class Square {
    row: number = 0;
    column: number = 0;

    constructor(r: number, c: number) {
        this.row = r;
        this.column = c;
    }

    public get_board_area() {
        return new BoardArea(this.row, this.row, this.column, this.column);
    }

}