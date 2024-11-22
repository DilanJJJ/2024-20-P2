import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { TrainerModule } from './trainer/trainer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, PokemonModule, TrainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
