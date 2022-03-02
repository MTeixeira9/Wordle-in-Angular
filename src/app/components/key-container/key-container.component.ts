import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

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
  ];
  @Output() checkRowGuess = new EventEmitter<string>();

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  handleClick(letter:string) {
    if (letter === '«') {
      this.deleteLetter();
      return;
    }

    if (letter === 'ENTER') {
      this.checkRow();
        return;
    }

    this.addLetter(letter);
  }

  addLetter(letter:string) {
    const currentTile = this.uiService.currentTile;
    const currentRow = this.uiService.currentRow;

    if (currentTile < 5 && currentRow < 6) {
      const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);

      if (tile) {
        tile.textContent = letter;
        tile.setAttribute('data', letter);
        this.uiService.setGuess(letter);
        //this.uiService.increaseTile();
      }
    }
  }

  deleteLetter() {
    let currentTile = this.uiService.currentTile;
    const currentRow = this.uiService.currentRow;

    if (currentTile > 0) {
      this.uiService.removeGuess();
      currentTile = this.uiService.currentTile;
      const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);

      if (tile) {
        tile.textContent = '';
        tile.setAttribute('data', '');
        //this.uiService.setGuess('');
      }
    }
  }

  checkRow() {
    const guess = this.uiService.currentGuess.join('');

    if (this.uiService.currentTile === 5) {
      this.checkRowGuess.emit(guess);
    }
  }

}
