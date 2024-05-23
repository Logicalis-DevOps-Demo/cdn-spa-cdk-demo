import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ AppModule ], declarations: [ AppComponent ]}).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'spa-aws-angular-poc'`, () => {
    expect(component.title).toEqual('spa-aws-angular-poc');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.textContent?.toString());
    expect(compiled.textContent?.toString()).toContain('SPA-POC');
  });

  it(`ngAfterViewInit`, () => {
    component.ngAfterViewInit();
    expect(component.version).toBeDefined();
  });

  it(`ngAfterViewInit`, () => {
    component.ngAfterViewInit();
    expect(component.asyncTabs).toBeDefined();
  });

});
