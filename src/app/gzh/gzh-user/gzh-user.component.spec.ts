import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GzhUserComponent } from './gzh-user.component';

describe('GzhUserComponent', () => {
  let component: GzhUserComponent;
  let fixture: ComponentFixture<GzhUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GzhUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GzhUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
