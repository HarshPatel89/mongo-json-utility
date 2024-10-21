import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformTracksComponent } from './transform-tracks.component';

describe('TransformTracksComponent', () => {
  let component: TransformTracksComponent;
  let fixture: ComponentFixture<TransformTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformTracksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
