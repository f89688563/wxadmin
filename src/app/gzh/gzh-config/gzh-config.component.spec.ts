import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GzhConfigComponent } from './gzh-config.component';

describe('GzhConfigComponent', () => {
  let component: GzhConfigComponent;
  let fixture: ComponentFixture<GzhConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GzhConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GzhConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
