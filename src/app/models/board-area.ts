export class BoardArea {

    row_a: number = 0;
    row_b: number = 0;
    column_a: number = 0;
    column_b: number = 0;

    constructor (ra: number, rb: number, ca: number, cb: number) {
        this.row_a = ra;
        this.row_b = rb;
        this.column_a = ca;
        this.column_b = cb;
    }

}