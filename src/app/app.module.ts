import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyFloatLabelComponent } from '../library/my-float-label/my-float-label.component';

@NgModule({
  imports:      
  [ 
    BrowserModule,
    FormsModule,
  ],
  declarations:
  [ 
    AppComponent,
    HelloComponent,
    MyFloatLabelComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
