import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RadiantPicksComponent } from './radiant-picks/radiant-picks.component';
import { DirePicksComponent } from './dire-picks/dire-picks.component';
import { DropdownModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RadiantPicksComponent,
    DirePicksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
