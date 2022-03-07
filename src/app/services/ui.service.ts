import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  currentRow:number = 0;
  currentTile:number = 0;
  private subject = new Subject<any>();
  guesses:string[][] = [];
  currentGuess:string[] = [];
  isGameOver:boolean = false;

  constructor() { }

  removeGuess() {
    this.currentGuess.pop();
    this.currentTile--;
  }

  setGuess(letter:string) {
    this.currentGuess.push(letter);
    this.currentTile++;
  }

  newGuess() {
    this.currentRow++;
    this.currentTile = 0;
    this.guesses.push(this.currentGuess);
    this.currentGuess = [];
  }

  setGameOver() {
    this.isGameOver = true;
  }

  onChangeGuessRow(): Observable<any> {
    return this.subject.asObservable();
  }
}
