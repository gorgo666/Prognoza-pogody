import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  pictures = [
    'https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1502288294350-301c0c4628c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1535640258312-4da3c565937f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1466179262313-02a151abfb3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  ];
  currentIndex = 0;

  constructor() {
    setInterval(() => {
      if (this.currentIndex > 2) {
        this.currentIndex = -1;
      }
      this.currentIndex = this.currentIndex + 1;
    }, 3000);
  }

  handleClick(index) {
    this.currentIndex = index;
  }

  handlePrev(index) {
    if (index < 1) {
      index = this.pictures.length;
    }

    this.currentIndex = index - 1;
  }
  handleNext(index) {
    if (index >= this.pictures.length - 1) {
      index = 0;
    }
    this.currentIndex = index + 1;
  }
}
