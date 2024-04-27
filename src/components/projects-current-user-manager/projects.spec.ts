import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsCurentUserManagerComponent } from './projects';

describe('ProjectsCurentUserManagerComponent', () => {
  let component: ProjectsCurentUserManagerComponent;
  let fixture: ComponentFixture<ProjectsCurentUserManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsCurentUserManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsCurentUserManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
