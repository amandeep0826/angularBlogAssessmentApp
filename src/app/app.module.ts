import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedBlogComponent } from './featured-blog/featured-blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogCardListComponent } from './blog-card-list/blog-card-list.component';
import { CommentsComponent } from './comments/comments.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUsComponent,
    ViewBlogComponent,
    CreateBlogComponent,
    HomeComponent,
    BannerComponent,
    FeaturedBlogComponent,
    BlogCardComponent,
    BlogCardListComponent,
    CommentsComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
