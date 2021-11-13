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

    var commentId = this.route.snapshot.params.blogId
    var url = "http://localhost:3000/comments?postId" + commentId
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
