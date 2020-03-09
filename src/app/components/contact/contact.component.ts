import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contact } from 'src/app/models/contact_item.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router,private service: ContactService) { }

  ngOnInit() {
  }
  submit(value:contact){
    this.service.report(value).subscribe(res => {
      console.log(res);
  }),
  console.log(value)



  }
}
