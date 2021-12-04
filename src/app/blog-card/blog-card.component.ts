import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() postData: any

  constructor(private http: HttpClient, private loader: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  deleteBlog(id: any) {
    var url = "http://localhost:3000/posts/" + id
    console.log("url", url)
    this.loader.start()
    this.http.delete(url).subscribe((response: any) => {
      this.loader.stop()
      location.reload()
      console.log("Response from delete blog api", response)
    }, (error) => {
      this.loader.stop()
      console.log("Error from delete blog api", error)
    })
  }

}
