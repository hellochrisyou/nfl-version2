import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviousGameOpponentComponent } from './shared/component/previous-game-opponent/previous-game-opponent.component';
import { PlayerPreviousGameComponent } from './shared/component/previous-game/previous-game.component';
import { MaterialModule } from './shared/modules/material.module';
import { NbaComponent } from './nba/nba.component';
import { PlayerPreviousGameAssistComponent } from './shared/component/previous-game-assists/previous-game-assists.component';
import { PlayerPreviousGameThreeComponent } from './shared/component/previous-game-three/previous-game-three.component';
import { PreviousGameOpponentAssistsComponent } from './shared/component/previous-game-opponent-assists/previous-game-opponent-assists.component';
import { PreviousGameOpponentThreeComponent } from './shared/component/previous-game-opponent-three/previous-game-opponent-three.component';
import { PlayerPreviousGameBlocksComponent } from './shared/component/previous-game-blocks/previous-game-blocks.component';
import { PreviousGameOpponentBlocksComponent } from './shared/component/previous-game-opponent-blocks/previous-game-opponent-blocks.component';
import { PreviousGameOpponentReboundComponent } from './shared/component/previous-game-opponent-reb/previous-game-opponent-reb.component';
import { PlayerPreviousGameReboundComponent } from './shared/component/previous-game-reb/previous-game-reb.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerPreviousGameComponent,
    PreviousGameOpponentComponent,
    PlayerPreviousGameAssistComponent,
    PlayerPreviousGameThreeComponent,
    NbaComponent,
    PreviousGameOpponentThreeComponent,
    PreviousGameOpponentAssistsComponent,
    PlayerPreviousGameBlocksComponent,
    PreviousGameOpponentBlocksComponent,
    PreviousGameOpponentReboundComponent,
    PlayerPreviousGameReboundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
