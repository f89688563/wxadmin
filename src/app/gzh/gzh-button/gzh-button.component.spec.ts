import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GzhButtonComponent } from './gzh-button.component';

describe('GzhButtonComponent', () => {
  let component: GzhButtonComponent;
  let fixture: ComponentFixture<GzhButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GzhButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GzhButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
