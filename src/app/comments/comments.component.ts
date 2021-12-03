import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() commentData: any

  constructor(private http: HttpClient, private loader: NgxUiLoaderService) {
  }

  ngOnInit(): void {
  }

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
