import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tile-container',
  templateUrl: './tile-container.component.html',
  styleUrls: ['./tile-container.component.css']
})
export class TileContainerComponent implements OnInit {

  guessRows:string[][] = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ];
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onChangeGuessRow().subscribe(
      letter => this.setGuess(letter)
      );
  }

  ngOnInit(): void {
  }

  setGuess(letter:string) {
    this.guessRows[this.uiService.currentRow][this.uiService.currentTile] = letter;
  }

}
