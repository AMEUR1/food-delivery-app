import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainManageComponent } from './gain-manage.component';

describe('GainManageComponent', () => {
  let component: GainManageComponent;
  let fixture: ComponentFixture<GainManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
