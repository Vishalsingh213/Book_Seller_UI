import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalytiscComponent } from './analytisc.component';

describe('AnalytiscComponent', () => {
  let component: AnalytiscComponent;
  let fixture: ComponentFixture<AnalytiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalytiscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalytiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
