import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  id:any;
  res:any;
  status:any;
  reviews:any =[];
  constructor(private review : ReviewService, private route : ActivatedRoute, private http : HttpClient){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:8888/movies-api/reviews/${this.id}`).subscribe((response)=>{
      this.reviews = response;
    })
  }

  onSubmit(reviewForm:any){
    this.id = this.route.snapshot.paramMap.get('id');
    reviewForm.value.mid = this.id;
    this.res= this.review.createReview(reviewForm.value).subscribe((response:any)=>{
       console.log(response);
       this.status = response.message;
    })
    reviewForm.value.created_at=new Date();
    console.log(reviewForm.value);
    this.reviews.unshift(reviewForm.value);
    reviewForm.reset();
  }
}
