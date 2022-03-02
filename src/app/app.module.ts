import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { TileContainerComponent } from './components/tile-container/tile-container.component';
import { KeyContainerComponent } from './components/key-container/key-container.component';
import { TitleContainerComponent } from './components/title-container/title-container.component';
import { KeyboardKeyComponent } from './components/keyboard-key/keyboard-key.component';
import { TileElementComponent } from './components/tile-element/tile-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GameContainerComponent,
    MessageContainerComponent,
    TileContainerComponent,
    KeyContainerComponent,
    TitleContainerComponent,
    KeyboardKeyComponent,
    TileElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
