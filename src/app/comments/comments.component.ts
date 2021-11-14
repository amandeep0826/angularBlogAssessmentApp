import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any
  constructor(private http: HttpClient, private route: ActivatedRoute, private loader: NgxUiLoaderService) {

    var commentId = this.route.snapshot.params.blogId
    var url = "http://localhost:3000/comments?postId=" + commentId
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from comments api", response)
      this.comments = response
      this.loader.stop()
    }, (error) => {
      console.log("Error from comments api", error)
      this.loader.stop()
    })
  }

  ngOnInit(): void {
  }

}
