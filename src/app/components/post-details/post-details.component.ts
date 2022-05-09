import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post.model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  singlePost: Post | undefined;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    this.activatedRoute.params
      .subscribe(value => {
        this.postService.getPostById(value['id']).subscribe(post =>  this.singlePost = post);
      })
  }

  ngOnInit(): void {
  }

}
