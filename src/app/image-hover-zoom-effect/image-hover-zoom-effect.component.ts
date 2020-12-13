import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hover-zoom-effect',
  templateUrl: './image-hover-zoom-effect.component.html',
  styleUrls: ['./image-hover-zoom-effect.component.css']
})
export class ImageHoverZoomEffectComponent implements OnInit {

  constructor() { }
  urlImg = 'https://images-na.ssl-images-amazon.com/images/I/61stQYWQO4L._SY450_.jpg';
  ngOnInit(): void {
    this.imageZoom('myimage', 'myresult');
  }

  imageZoom(imgID, resultID) {debugger
    let img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    // console.log('imageZoom', img);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement('DIV');
    lens.setAttribute('class', 'img-zoom-lens');
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    // console.log('imageZoom1', img, img.src);
    // console.log('imageZoom2', cx, img.width, img.height);
    result.style.backgroundImage = 'url(\'' + img.src + '\')';
    result.style.backgroundSize = (img.width * cx) + 'px ' + (img.height * cy) + 'px';
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener('mousemove', (e) => this.moveLens(e, img, cx, cy, lens, result) );
    img.addEventListener('mousemove', (e) => this.moveLens(e, img, cx, cy, lens, result));
    /* And also for touch screens: */
    lens.addEventListener('touchmove', (e) => this.moveLens(e, img, cx, cy, lens, result));
    img.addEventListener('touchmove',(e) => this.moveLens(e, img, cx, cy, lens, result));
  }

   moveLens(e, img, cx, cy, lens, result) {
     console.log('moveLens', e, typeof(e), img, cx, cy, lens, result);
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = this.getCursorPos(e, img);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    console.log('moveLens2', pos, lens.offsetWidth, lens.offsetHeight, img.width, img.height, x ,y );
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }

  getCursorPos(e, img) {
    console.log('getCursorPos', e, img);
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

}
