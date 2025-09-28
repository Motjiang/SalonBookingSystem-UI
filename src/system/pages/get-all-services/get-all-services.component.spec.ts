import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllServicesComponent } from './get-all-services.component';

describe('GetAllServicesComponent', () => {
  let component: GetAllServicesComponent;
  let fixture: ComponentFixture<GetAllServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
