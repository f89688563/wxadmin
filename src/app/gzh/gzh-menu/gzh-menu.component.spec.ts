import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GzhMenuComponent } from './gzh-menu.component';

describe('GzhMenuComponent', () => {
  let component: GzhMenuComponent;
  let fixture: ComponentFixture<GzhMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GzhMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GzhMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
