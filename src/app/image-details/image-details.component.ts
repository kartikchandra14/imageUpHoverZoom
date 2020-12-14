import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  src;
  imgInfo;
  constructor() { }

  ngOnInit(): void {
    this.src = localStorage.getItem('imgSrc');
    this.imgInfo = JSON.parse(localStorage.getItem('imgInfo'));
  }

}
