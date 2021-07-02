import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DragDropModule} from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
