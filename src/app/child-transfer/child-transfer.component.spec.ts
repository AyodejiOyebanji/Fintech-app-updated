import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTransferComponent } from './child-transfer.component';

describe('ChildTransferComponent', () => {
  let component: ChildTransferComponent;
  let fixture: ComponentFixture<ChildTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
