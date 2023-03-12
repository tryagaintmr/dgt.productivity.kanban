import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports : [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: []
})
export class CoreModule { }
