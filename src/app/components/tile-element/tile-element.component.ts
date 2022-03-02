import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-element',
  templateUrl: './tile-element.component.html',
  styleUrls: ['./tile-element.component.css']
})
export class TileElementComponent implements OnInit {

  @Input() id!: string;
  text!: string;  

  constructor() { }

  ngOnInit(): void {
  }

}
