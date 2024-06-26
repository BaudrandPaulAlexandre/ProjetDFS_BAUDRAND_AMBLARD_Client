import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsAllComponent } from './projects';

describe('ProjectsComponent', () => {
  let component: ProjectsAllComponent;
  let fixture: ComponentFixture<ProjectsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
