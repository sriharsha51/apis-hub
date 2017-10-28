import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  
  title = 'Pixabay free image search';
  images: any[];
  searchQuery: string;
  imagesFound: boolean = false;
  loadingImages: boolean = false;
  message: string;
  messageClass: boolean = false;

  constructor(private _apiService: APIService) { }

  handleImages(data) {
    this.imagesFound = true;
    this.images = data.hits;
  }

  searchImages(query: string) {
    if(!query) {
      this.messageClass = true;
      this.message = "Please enter something to search."
    } else {
      this.loadingImages = true;
      this.messageClass = false;
      return this._apiService.getImage(query).subscribe(
        data => this.handleImages(data),
        error => console.log(error),
        () => this.loadingImages = false
      )
    }
    
  }


  ngOnInit() {
  }

}
