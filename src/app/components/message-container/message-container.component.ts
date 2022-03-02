import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(message:string) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;    
    const msgBox = document.querySelector('.message-container');

    if (msgBox) {
      msgBox.append(messageElement);
      setTimeout(() => msgBox.removeChild(messageElement), 2000);
    }
  }

}
