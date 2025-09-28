import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStaffMembersComponent } from './get-all-staff-members.component';

describe('GetAllStaffMembersComponent', () => {
  let component: GetAllStaffMembersComponent;
  let fixture: ComponentFixture<GetAllStaffMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllStaffMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllStaffMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
