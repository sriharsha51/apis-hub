import { Component, OnInit } from '@angular/core';
import { APIService } from "../services/api.service";

@Component({
  selector: 'app-cdnjs',
  templateUrl: './cdnjs.component.html',
  styleUrls: ['./cdnjs.component.css']
})
export class CdnjsComponent implements OnInit {

  title: string = "Free CDNs from CDNJS";
  searchQuery: string;
  cdns;
  message: string;
  messageClass: boolean = false;
  loadingCdns: boolean = false;

  constructor(private _apiService: APIService) { }

  searchCdns(query: string) {
    if(!query){
      this.messageClass = true;
      this.message = "Please enter something to search.";
    } else {
      this.loadingCdns = true;
      this.messageClass = false;
      return this._apiService.getcdns(query).subscribe(
        data => { 
          this.cdns = data.results;
          this.loadingCdns = false;
          console.log(data.results)
        },
        error => console.log(error)
      )
    }
    
  }

  ngOnInit() {
  }

}
