import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrahenciComponent } from './kontrahenci.component';

describe('KontrahenciComponent', () => {
  let component: KontrahenciComponent;
  let fixture: ComponentFixture<KontrahenciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KontrahenciComponent]
    });
    fixture = TestBed.createComponent(KontrahenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
