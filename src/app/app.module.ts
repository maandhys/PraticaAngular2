import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatasComponent } from './datas/datas.component';
import { EventosComponent } from './eventos/eventos.component';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasComponent,
    EventosComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
