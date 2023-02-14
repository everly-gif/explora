import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-hero',
  templateUrl: './movie-details-hero.component.html',
  styleUrls: ['./movie-details-hero.component.css']
})
export class MovieDetailsHeroComponent implements OnInit{
  
  private id:any;
  details:any = [];

  constructor(private movie: MovieListService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie.getMovie(this.id).subscribe((response:any)=>{
      console.log(response);
      this.details = response;
      })
  }
}
