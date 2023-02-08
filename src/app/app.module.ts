import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HomeComponent } from './home/home.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    NewsletterComponent,
    HomeComponent,
    LatestMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
