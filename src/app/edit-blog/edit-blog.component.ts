import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  @Input() editPostData: any

  blogTitle: any
  blogAuthor: any
  blogAuthorInfo: any
  blogCategory: any
  blogDate: any
  blogHashtags: any
  blogContent: any
  blogDetail: any
  blogIdEditBlog: any

  constructor(private http: HttpClient, private route: ActivatedRoute, private loader: NgxUiLoaderService, private router: Router) {
    this.blogIdEditBlog = this.route.snapshot.params.blogIdEditBlog
    var url = "http://localhost:3000/posts/" + this.blogIdEditBlog
    console.log("Route", this.route.snapshot)
    this.loader.start()
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from blog detail api", response)
      this.blogDetail = response
      this.blogTitle = response.title
      this.blogAuthor = response.author
      this.blogAuthorInfo = response.authorInfo
      this.blogCategory = response.category
      this.blogDate = response.date
      this.blogHashtags = response.hashtags
      this.blogContent = response.content

      this.loader.stop()
    }, (error) => {
      console.log("Error from blog detail api", error)
      this.loader.stop()
    })
  }

  updateBlog() {
    var url = "http://localhost:3000/posts/" + this.blogIdEditBlog
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
    this.loader.start()
    this.http.put(url, requestJson).subscribe((response: any) => {
      console.log("Response from update blog api", response)
      this.router.navigate(['/view-blog/' + this.blogIdEditBlog])
      this.loader.stop()
    }, (error) => {
      console.log("Error from update blog api", error)
      this.loader.stop()
    })

  }
  ngOnInit(): void {
  }

}
