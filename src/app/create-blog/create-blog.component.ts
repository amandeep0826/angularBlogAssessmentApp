import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blogTitle: any
  blogAuthor: any
  blogAuthorInfo: any
  blogCategory: any
  blogDate: any
  blogHashtags: any
  blogContent: any
  blogCardContent: any
  blogIdCreateBlog: any

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private loader: NgxUiLoaderService) {
  }

  postBlog() {
    this.loader.start()
    var url = "http://localhost:3000/posts"
    var requestJson = {
      title: this.blogTitle,
      author: this.blogAuthor,
      authorInfo: this.blogAuthorInfo,
      category: this.blogCategory,
      date: this.blogDate,
      hashtags: this.blogHashtags,
      cardContent: this.blogContent.slice(0, 250),
      content: this.blogContent
    }
    this.http.post(url, requestJson).subscribe((response: any) => {
      console.log("Response from post blog api", response)
      this.blogIdCreateBlog = response.id
      this.router.navigate(['/view-blog/' + this.blogIdCreateBlog])
      this.loader.stop()
    }, (error) => {
      console.log("Error from post blog api", error)
      this.loader.stop()
    })
  }

  ngOnInit(): void {
  }

}
