import { Component, Input, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() square: Square = {} as Square;

  constructor() { }

  ngOnInit(): void {
  }

}
