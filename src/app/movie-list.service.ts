import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }

  public getMovies(){
    return this.http.get("http://localhost:8888/movies-api/movies");
  }

  public getMovie(id:any){
    return this.http.get(`http://localhost:8888/movies-api/movies/${id}`);
  }
}
