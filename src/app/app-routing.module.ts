import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageHoverZoomEffectComponent } from './image-hover-zoom-effect/image-hover-zoom-effect.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  {path: '', component: ImageUploadComponent},
  {path: 'imgDetail', component: ImageDetailsComponent},
  {path: 'imgHover', component: ImageHoverZoomEffectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
