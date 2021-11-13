import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'blog-card/:blogId', component: ViewBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
