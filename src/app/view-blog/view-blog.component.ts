import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blogDetail: any

  comments: any
  commentId: any
  commentIdInt: any

  constructor(private http: HttpClient, private route: ActivatedRoute, private loader: NgxUiLoaderService) {

    var blogId = this.route.snapshot.params.blogId
    var url = "http://localhost:3000/posts/" + blogId
    this.loader.start()
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from blog detail api", response)
      this.blogDetail = response
      this.loader.stop()
    }, (error) => {
      console.log("Error from blog detail api", error)
      this.loader.stop()
    })


    this.commentId = this.route.snapshot.params.blogId
    this.commentIdInt = Number(this.route.snapshot.params.blogId)
    var url = "http://localhost:3000/comments?postId=" + this.commentId
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

  commentText: any
  commentatorName: any

  postComment() {
    var requestJson = {
      body: this.commentText,
      author: this.commentatorName,
      postId: this.commentIdInt
    }
    var url = "http://localhost:3000/comments/"
    this.loader.start()
    this.http.post(url, requestJson).subscribe((response: any) => {
      location.reload();
      this.loader.stop();
      console.log("Response from post comment api", response)
    }, (error) => {
      location.reload();
      this.loader.stop();
      console.log("Error from post comment api", error)
    })
  }

  deleteComment() {
    var url = "http://localhost:3000/comments" + this.commentId
    console.log("comment url", url)
    // this.http.delete(url).subscribe((response: any) => {
    //   location.reload();
    //   this.loader.stop();
    //   console.log("Response from delete comment api", response)
    // }, (error) => {
    //   this.loader.stop();
    //   console.log("Error from delete comment api", error)
    // })
  }

}
