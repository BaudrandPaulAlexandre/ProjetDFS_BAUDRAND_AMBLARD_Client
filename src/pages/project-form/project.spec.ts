import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectFormPage } from './project';

describe('ProjectFormPage', () => {
  let component: ProjectFormPage;
  let fixture: ComponentFixture<ProjectFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFormPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
