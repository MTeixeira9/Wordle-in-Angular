import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileElementComponent } from './tile-element.component';

describe('TileElementComponent', () => {
  let component: TileElementComponent;
  let fixture: ComponentFixture<TileElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
