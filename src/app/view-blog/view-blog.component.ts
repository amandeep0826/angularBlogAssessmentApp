import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  blogDetail: any

  constructor(private http: HttpClient, private route: ActivatedRoute) {

    var blogId = this.route.snapshot.params.blogId
    var url = "http://localhost:3000/posts/" + blogId
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from blog detail api", response)
      this.blogDetail = response
    }, (error) => {
      console.log("Error from blog detail api", error)
    })
  }

  ngOnInit(): void {
  }

}
