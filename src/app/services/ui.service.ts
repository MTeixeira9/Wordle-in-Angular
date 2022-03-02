import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  currentRow:number = 0;
  currentTile:number = 0;
  private lastGuessLetter!:string;
  private subject = new Subject<any>();

  constructor() { }

  increaseTile() {
    this.currentTile++;
  }

  setGuess(letter:string) {
    this.lastGuessLetter = letter;
    this.subject.next(this.lastGuessLetter);
  }

  onChangeGuessRow(): Observable<any> {
    return this.subject.asObservable();
  }
}
