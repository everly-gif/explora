import { Component, OnInit,  } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { ActivatedRoute  } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details-hero',
  templateUrl: './movie-details-hero.component.html',
  styleUrls: ['./movie-details-hero.component.css']
})
export class MovieDetailsHeroComponent implements OnInit{
  
  private id:any;
  details:any = [];
  rating : number = 0;
  averageRating : any = 0;
  reviewarray:any = []; 

  constructor(private movie: MovieListService, private route : ActivatedRoute, private http : HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http.get(`http://localhost:8888/movies-api/reviews/${this.id}`).subscribe((response:any)=>{
      this.reviewarray = response;
      this.calculateAverage(this.reviewarray);
     
    })
    this.movie.getMovie(this.id).subscribe((response:any)=>{
      console.log(response);
      this.details = response;
      })

  
  }

  calculateAverage(reviews:any[])
  {
    let totalRating=0;
    console.log(reviews);
    reviews.forEach((review)=>{
      totalRating+=Number(review.rating);
      console.log(totalRating);
    })

    let average=(totalRating/reviews.length);

    this.averageRating=average*20;

    this.averageRating = this.averageRating.toFixed(1);

    console.log("rating",totalRating,average,this.averageRating);
    

  }
}
