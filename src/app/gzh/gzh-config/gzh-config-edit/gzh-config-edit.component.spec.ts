import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GzhConfigEditComponent } from './gzh-config-edit.component';

describe('GzhConfigEditComponent', () => {
  let component: GzhConfigEditComponent;
  let fixture: ComponentFixture<GzhConfigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GzhConfigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GzhConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
