import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageContainerComponent } from '../message-container/message-container.component';
import { UiService } from 'src/app/services/ui.service';
import { WordleService } from 'src/app/services/wordle.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent implements OnInit {

  @ViewChild(MessageContainerComponent) messageContainer!: MessageContainerComponent;
  wordle!:string;

  constructor(private uiService: UiService, private wordleService: WordleService) { }

  ngOnInit(): void {
    this.wordleService.getWordle().subscribe(
      (response) => this.wordle = response[0].toUpperCase()
    );
  }

  verifyGuess() {
    const guess = this.uiService.currentGuess.join('');
    
    this.wordleService.wordInDictionary(guess).subscribe(
      (response) => {
        if (response.result_msg === 'Entry word not found') {
          this.messageContainer.showMessage('Word not in list');
          return;
        }
        else {
          this.flipTile();

          if (this.wordle === guess) {
            this.messageContainer.showMessage('Magnificient!');
            this.uiService.setGameOver();
            return;
          }
          else {
            if (this.uiService.currentRow >= 5) {
              this.messageContainer.showMessage('Game Over');
              this.uiService.setGameOver();
              return;
            }
            else {
              this.uiService.newGuess();
            }
          }
        }
      }
    ); 
  }

  flipTile() {
    const row = document.querySelector('#guessRow-' + this.uiService.currentRow);

    if (row) {
      const rowTiles = Array.from(row.childNodes);
      let checkWordle = this.wordle;
      const guess:any[] = []

      rowTiles.forEach((t, index) => {
        const tile = document.getElementById('guessRow-' + this.uiService.currentRow + '-tile-' + index);
        
        if (tile) {
          const dataLetter = tile.getAttribute('data');
          
          if (dataLetter) {
            guess.push({ letter: dataLetter, color: 'grey-overlay'});
          }
        }
      });

      guess.forEach((guess, index) => {
          if (guess.letter === this.wordle[index]) {
              guess.color = 'green-overlay';
              checkWordle = checkWordle.replace(guess.letter, '');
          }
          else if (checkWordle.includes(guess.letter)) {
              guess.color = 'yellow-overlay';
              checkWordle = checkWordle.replace(guess.letter, '');
          }
      });

      rowTiles.forEach((t, index) => {
        const tile = document.getElementById('guessRow-' + this.uiService.currentRow + '-tile-' + index);

        if (tile) {
          setTimeout(() => {
            tile.classList.add(guess[index].color);
            this.addColorToKey(guess[index].letter, guess[index].color);
            tile.classList.add('flip');
          }, 500 * index)
        }
      });
    }
  }

  addColorToKey (keyLetter:string, color:string) {
    const key = document.getElementById(keyLetter);

    if (key)
      key.classList.add(color);
  }

}
