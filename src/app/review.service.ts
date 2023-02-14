import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient, private route : ActivatedRoute) { }


  public createReview(data :any){

    return  this.http.post('http://localhost:8888/movies-api/reviews', data);

  }
 
  
}
