import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any
  constructor(private http: HttpClient) {
    var url = "http://localhost:3000/posts"
    this.http.get(url).subscribe((response: any) => {
      console.log("Response from posts api", response)
      this.posts = response
    }, (error) => {
      console.log("Error from posts api", error)
    })
  }

  ngOnInit(): void {
  }

  printData() {
    console.log("The posts is", this.posts)
  }

}
