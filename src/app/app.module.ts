import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageHoverZoomEffectComponent } from './image-hover-zoom-effect/image-hover-zoom-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    ImageDetailsComponent,
    ImageHoverZoomEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
