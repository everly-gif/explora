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
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsHeroComponent } from './movie-details-hero/movie-details-hero.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HttpClientModule } from '@angular/common/http';


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
    LatestMoviesComponent,
    MovieDetailsComponent,
    MovieDetailsHeroComponent,
    CommentSectionComponent,
    MovieListComponent,
    MoviePageComponent,
    WatchlistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
