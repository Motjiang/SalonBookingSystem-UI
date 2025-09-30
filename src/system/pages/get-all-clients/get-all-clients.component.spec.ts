import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllClientsComponent } from './get-all-clients.component';

describe('GetAllClientsComponent', () => {
  let component: GetAllClientsComponent;
  let fixture: ComponentFixture<GetAllClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
