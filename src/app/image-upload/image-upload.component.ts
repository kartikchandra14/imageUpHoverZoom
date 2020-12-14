import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  url;
  constructor() { }

  ngOnInit(): void {
  }

  uploadImage(){
    
  }

  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        console.log('onSelectFile1', event.target.files[0]);

        let reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url
        const obj = { name: event.target.files[0].name , size: event.target.files[0].size };
        localStorage.setItem('imgInfo', JSON.stringify(obj));
        reader.onload = (event) => { // called once readAsDataURL is completed
          // console.log('onSelectFile2', event);
          this.url = event.target.result;
          localStorage.setItem('imgSrc', this.url);
        }
      }
  }
}
