import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.css']
})
export class LatestMoviesComponent implements OnInit {
  movies:any = [];


  constructor(private movieList: MovieListService) { }
  ngOnInit(){
    this.movieList.getMovies().subscribe((response:any)=>{

    this.movies = response;
    })
  }
 

}
