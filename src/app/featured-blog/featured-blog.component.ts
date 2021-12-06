import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-blog',
  templateUrl: './featured-blog.component.html',
  styleUrls: ['./featured-blog.component.css']
})
export class FeaturedBlogComponent implements OnInit {

  featuredPost: any
  randomNum: any

  constructor(private http: HttpClient) {
    var url = "http://localhost:3000/posts"
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from featured posts api", response)
      this.randomNum = Math.floor(Math.random() * response.length) + 1;
      this.featuredPost = response[this.randomNum]
    }, (error) => {
      console.log("Error from featured posts api", error)
    })
  }

  ngOnInit(): void {
  }

}
