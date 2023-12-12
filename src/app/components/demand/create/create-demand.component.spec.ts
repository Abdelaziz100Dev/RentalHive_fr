import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemandComponent } from './create-demand.component';

describe('CreateDemandComponent', () => {
  let component: CreateDemandComponent;
  let fixture: ComponentFixture<CreateDemandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDemandComponent]
    });
    fixture = TestBed.createComponent(CreateDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
