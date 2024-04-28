import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShowPage } from './project';

describe('ProjectShowPage', () => {
  let component: ProjectShowPage;
  let fixture: ComponentFixture<ProjectShowPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectShowPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
