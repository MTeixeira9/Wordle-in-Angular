import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageContainerComponent } from '../message-container/message-container.component';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {

  @ViewChild(MessageContainerComponent)
  messageContainer!: MessageContainerComponent;
  wordle:string = "SUPER";
  isGameOver:boolean = false;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  verifyGuess($event:string) {
    if (this.uiService.currentTile === 5) {
      if (this.wordle === $event) {
        this.messageContainer.showMessage('Magnificient!');
        this.isGameOver = true;
        return;
      }
      else {
        if (this.uiService.currentRow >= 5) {
          this.messageContainer.showMessage('Game Over');
          this.isGameOver = true;
          return;
        }
        else {
            this.uiService.newGuess();
        }
      }
    }    
  }

}
