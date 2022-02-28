import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyContainerComponent } from './key-container.component';

describe('KeyContainerComponent', () => {
  let component: KeyContainerComponent;
  let fixture: ComponentFixture<KeyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
