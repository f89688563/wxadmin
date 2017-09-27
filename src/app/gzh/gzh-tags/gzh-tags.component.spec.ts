import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GzhTagsComponent } from './gzh-tags.component';

describe('GzhTagsComponent', () => {
  let component: GzhTagsComponent;
  let fixture: ComponentFixture<GzhTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GzhTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GzhTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
