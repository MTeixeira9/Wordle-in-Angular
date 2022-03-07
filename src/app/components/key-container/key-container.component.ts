import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
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

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.keyCode >= 97 && event.keyCode <= 122) { // a-z
      this.handleClick(event.key.toUpperCase())
    }
    else if (event.keyCode === 127) { // backspace/delete
      this.handleClick('«')
    }
    else if (event.keyCode === 13) { // enter
      this.handleClick(event.key.toUpperCase())
    }
  }

  handleClick(letter:string) {
    if (!this.uiService.isGameOver) {
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
      }
    }
  }

  checkRow() {
    this.checkRowGuess.emit();
  }

}
