import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/componentes/header/header.component';
import { SectionComponent } from './app/componentes/section/section.component';
import { SideBarComponent } from './app/componentes/side-bar/side-bar.component';
import { FooterComponent } from './app/componentes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './app/modules/material/material.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    SideBarComponent,
    FooterComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
