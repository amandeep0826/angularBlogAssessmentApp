import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-blog',
  templateUrl: './featured-blog.component.html',
  styleUrls: ['./featured-blog.component.css']
})
export class FeaturedBlogComponent implements OnInit {

  @Input() featuredPostData: any

  constructor() { }

  ngOnInit(): void {
  }

}
