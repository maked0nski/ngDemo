import { Component } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  posts: Post[] = [];

  constructor(private postService: PostService) {
    postService.getAllPosts().subscribe(jsonPost => this.posts = jsonPost)
  }

  ngOnInit(): void {
  }

}
