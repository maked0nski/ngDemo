import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.HttpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPostById(id:string): Observable<Post>{
    return this.HttpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
