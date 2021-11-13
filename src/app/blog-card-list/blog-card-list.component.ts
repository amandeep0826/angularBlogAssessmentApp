import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-blog-card-list',
  templateUrl: './blog-card-list.component.html',
  styleUrls: ['./blog-card-list.component.css']
})
export class BlogCardListComponent implements OnInit {

  posts: any

  constructor(private http: HttpClient, private loader: NgxUiLoaderService) {
    var url = "http://localhost:3000/posts"
    this.loader.start()
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from posts api", response)
      this.posts = response
      this.loader.stop()
    }, (error) => {
      console.log("Error from posts api", error)
      this.loader.stop()
    })
  }

  ngOnInit(): void {
  }

}
