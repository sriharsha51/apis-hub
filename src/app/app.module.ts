import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CdnjsComponent } from './cdnjs/cdnjs.component';

import { APIService } from './services/api.service';
import { DataValidationComponent } from './data-validation/data-validation.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    HomeComponent,
    NavbarComponent,
    CdnjsComponent,
    DataValidationComponent,
    AboutUsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
