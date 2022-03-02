import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageContainerComponent } from '../message-container/message-container.component';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {

  @ViewChild(MessageContainerComponent)
  messageContainer!: MessageContainerComponent;
  wordle:string = "SUPER";

  constructor() { }

  ngOnInit(): void {
  }

  verifyGuess($event:string) {
    if (this.wordle === $event) {
      this.messageContainer.showMessage('Magnificient!');
    }
  }

}
