import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CreateComponent } from './components/rendering/create/create.component';
import { CarouselComponent } from './components/rendering/carousel/carousel.component';
import { ThumbnailsComponent } from './components/rendering/thumbnails/thumbnails.component';
import { AllitemsComponent } from './components/allitems/allitems.component';
import { EditComponent } from './components/rendering/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CarouselComponent,
    ThumbnailsComponent,
    CreateComponent,
    AllitemsComponent,
    EditComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
