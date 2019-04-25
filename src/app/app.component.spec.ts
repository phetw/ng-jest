import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-jest'`, () => {
    expect(component.title).toEqual('ng-jest');
  });

  it('should render title in a h1 tag', () => {
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('h1').textContent).toContain('Welcome to ng-jest!');
  });
});
