import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHoverZoomEffectComponent } from './image-hover-zoom-effect.component';

describe('ImageHoverZoomEffectComponent', () => {
  let component: ImageHoverZoomEffectComponent;
  let fixture: ComponentFixture<ImageHoverZoomEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageHoverZoomEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHoverZoomEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
