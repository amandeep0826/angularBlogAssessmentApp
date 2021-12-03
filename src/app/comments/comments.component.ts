import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() commentData: any

  // comments: any
  commentId: any
  commentIdInt: any
  constructor(private http: HttpClient, private route: ActivatedRoute, private loader: NgxUiLoaderService) {

    // this.commentId = this.route.snapshot.params.blogId
    this.commentIdInt = Number(this.route.snapshot.params.blogId)
    // var url = "http://localhost:3000/comments?postId=" + this.commentId
    // this.http.get(url).subscribe((response: any) => {
    //   console.log("Response from comments api", response)
    //   this.comments = response
    //   this.loader.stop()
    // }, (error) => {
    //   console.log("Error from comments api", error)
    //   this.loader.stop()
    // })
  }

  ngOnInit(): void {
  }

  // commentText: any
  // commentatorName: any

  // postComment() {
  //   var requestJson = {
  //     body: this.commentText,
  //     author: this.commentatorName,
  //     postId: this.commentIdInt
  //   }
  //   var url = "http://localhost:3000/comments/"
  //   this.loader.start()
  //   this.http.post(url, requestJson).subscribe((response: any) => {
  //     location.reload();
  //     this.loader.stop();
  //     console.log("Response from post comment api", response)
  //   }, (error) => {
  //     location.reload();
  //     this.loader.stop();
  //     console.log("Error from post comment api", error)
  //   })
  // }

  deleteComment(commentId: any) {
    var url = "http://localhost:3000/comments/" + commentId
    console.log("url", url)
    this.http.delete(url).subscribe((response: any) => {
      location.reload();
      this.loader.stop();
      console.log("Response from delete comment api", response)
    }, (error) => {
      this.loader.stop();
      console.log("Error from delete comment api", error)
    })
  }

}
