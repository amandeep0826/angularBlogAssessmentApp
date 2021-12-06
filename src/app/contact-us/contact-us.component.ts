import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  userEmail: any
  userName: any
  userMessage: any
  emailError: any = ""

  constructor(private common: CommonService, private loader: NgxUiLoaderService, private router: Router) {
  }
  sendMessage() {
    if (this.common.validEmail(this.userEmail)) {
      this.loader.start()
      alert("You're message has been sent!")
      location.reload()
      this.loader.stop()
    }
    else {
      this.emailError = "Invalid Email"
    }
  }

  ngOnInit(): void {
  }

}
