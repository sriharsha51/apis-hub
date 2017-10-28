import { Component, OnInit } from '@angular/core';
import { APIService } from "../services/api.service";

@Component({
  selector: 'app-data-validation',
  templateUrl: './data-validation.component.html',
  styleUrls: ['./data-validation.component.css']
})
export class DataValidationComponent implements OnInit {

  email: string;
  message: string;
  loadingResults: boolean =false;
  messageClass: boolean = false;
  results;

  number: string;
  NumMessage: string;
  NumMessageClass: boolean = false;
  NumLoadingResults: boolean = false;
  NumResults;

  language: string;
  LanMessage: string;
  LanLoadingResults: boolean =false;
  LanMessageClass: boolean = false;
  LanResults;

  constructor(private _apiService: APIService) { }

  ngOnInit() {
  }

  checkEmail(email) {
    if(!email) {
      this.messageClass = true;
      this.message = "Please enter email to search."
    } else {
      this.loadingResults= true;
      this._apiService.checkEmail(email).subscribe(
        data => {
          this.results = data;
          this.loadingResults = false;
         },
         error => {
           this.messageClass = true;
           this.message = error;
         }
      )
    }

  }

  checkNumber(number) {
    if(!number) {
      this.NumMessageClass = true;
      this.NumMessage = "Please enter phone number to search."
    } else {
      this.NumLoadingResults= true;
      this._apiService.checkNumber(number).subscribe(
        data => {
          this.NumResults = data;
          this.NumLoadingResults = false;
         },
         error => {
           this.NumMessageClass = true;
           this.NumMessage = error;
         }
      )
    }

  }

  checkLanguage(language) {
    if(!language) {
      this.LanMessageClass = true;
      this.LanMessage = "Please enter text to search."
    } else {
      this.LanLoadingResults= true;
      this._apiService.checkLanguage(encodeURI(language)).subscribe(
        data => {
          console.log(data);
          this.LanResults = data;
          this.LanLoadingResults = false;
         },
         error => {
           this.LanMessageClass = true;
           this.LanMessage = error;
         }
      )
    }
  }
}


