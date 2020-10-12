import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandManageComponent } from './command-manage.component';

describe('CommandManageComponent', () => {
  let component: CommandManageComponent;
  let fixture: ComponentFixture<CommandManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
