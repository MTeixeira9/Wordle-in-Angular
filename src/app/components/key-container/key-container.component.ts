import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-container',
  templateUrl: './key-container.component.html',
  styleUrls: ['./key-container.component.css']
})
export class KeyContainerComponent implements OnInit {

  keys:string[] = [
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'ENTER',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      '«',
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(key:string) {
    console.log(key, 'clicked');
  }

}
