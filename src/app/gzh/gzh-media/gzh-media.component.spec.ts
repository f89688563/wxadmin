import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GzhMediaComponent } from './gzh-media.component';

describe('GzhMediaComponent', () => {
  let component: GzhMediaComponent;
  let fixture: ComponentFixture<GzhMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GzhMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GzhMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
