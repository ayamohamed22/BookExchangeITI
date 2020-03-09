import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceNameService } from 'src/app/services/search/search.service';
import { title } from 'process';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 title:any;
 books:any;
 @Input()  searchTitle
  constructor( private route: ActivatedRoute, private search:ServiceNameService) {


    
  }

   
      
     
      

  ngOnInit() {

    
    this.search.searchByName(title).subscribe(Response=>{
      this.books=Response;
      
    });

    this.route.paramMap['title']
    this.route.paramMap.subscribe(params=>{
    this.title = params.get('title');
  }
    );

  }}

    
