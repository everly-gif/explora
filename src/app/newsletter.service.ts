import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http : HttpClient) { }
  
  public subscribe(data :any){

    return  this.http.post('http://localhost:8888/movies-api/subscribe', data);

  }

}
