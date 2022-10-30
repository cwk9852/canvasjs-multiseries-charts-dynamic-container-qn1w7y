import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataService } from './shared/data.service';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
    ],
  declarations: [AppComponent, HelloComponent, GraphsComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
