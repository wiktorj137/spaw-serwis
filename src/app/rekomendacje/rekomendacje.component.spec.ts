import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekomendacjeComponent } from './rekomendacje.component';

describe('RekomendacjeComponent', () => {
  let component: RekomendacjeComponent;
  let fixture: ComponentFixture<RekomendacjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RekomendacjeComponent]
    });
    fixture = TestBed.createComponent(RekomendacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
