import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import{NameEditorComponent} from './name-editor/name-editor.component';
import{SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movies', component: MoviePageComponent },
  { path: 'watchlist', component: WatchlistComponent },
  {path:'signup',component:NameEditorComponent},
  {path:'login',component:SignInComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
