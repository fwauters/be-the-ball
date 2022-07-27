import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponents } from './config/material-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, FirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from './config/firebase-config';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateGameFormComponent } from './pages/events/components/create-game-form/create-game-form.component';
import { SelectPlayersFormComponent } from './pages/events/components/select-players-form/select-players-form.component';
import { CreatePlayerFormComponent } from './pages/events/components/create-player-form/create-player-form.component';
import { GameEventGridComponent } from './pages/events/components/game-event-grid/game-event-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    CreateGameFormComponent,
    SelectPlayersFormComponent,
    CreatePlayerFormComponent,
    GameEventGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialComponents,
    BrowserAnimationsModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
