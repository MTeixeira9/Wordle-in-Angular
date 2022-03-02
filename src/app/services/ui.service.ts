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

  constructor() { }

  removeGuess() {
    this.currentGuess.pop();
    this.currentTile--;
  }

  setGuess(letter:string) {
    this.currentGuess.push(letter);
    this.currentTile++;
  }

  onChangeGuessRow(): Observable<any> {
    return this.subject.asObservable();
  }
}
