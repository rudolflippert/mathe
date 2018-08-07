import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AufgabeModule } from './aufgabe/aufgabe.module';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SuperComponent } from './deko/super/super.component';
import { DekoModule } from './deko/deko.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    AufgabeModule,
    DekoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
