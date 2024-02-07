import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCompanyComponent } from './services-company.component';

describe('ServicesCompanyComponent', () => {
  let component: ServicesCompanyComponent;
  let fixture: ComponentFixture<ServicesCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesCompanyComponent]
    });
    fixture = TestBed.createComponent(ServicesCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
