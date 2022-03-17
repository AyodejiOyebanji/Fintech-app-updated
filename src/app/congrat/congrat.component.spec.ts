import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratComponent } from './congrat.component';

describe('CongratComponent', () => {
  let component: CongratComponent;
  let fixture: ComponentFixture<CongratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
