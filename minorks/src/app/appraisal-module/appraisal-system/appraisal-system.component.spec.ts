import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalSystemComponent } from './appraisal-system.component';

describe('AppraisalSystemComponent', () => {
  let component: AppraisalSystemComponent;
  let fixture: ComponentFixture<AppraisalSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisalSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppraisalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
