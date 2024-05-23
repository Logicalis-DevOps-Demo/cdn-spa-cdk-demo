import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallComponent } from './apicall.component';
import { AppModule } from '../app.module';
import {APP_BASE_HREF} from '@angular/common';

describe('ApiCallComponent', () => {
  let component: ApiCallComponent;
  let fixture: ComponentFixture<ApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCallComponent ],
      imports: [ AppModule ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('ngOnInit', () => {
    component.ngOnInit()
    expect(component.resultado).toBeUndefined();
  });

  it('showBody', () => {
    component.showBody()
    expect(component.response).toBeUndefined();
  });


  it('showResponse', () => {
    component.showResponse()
    expect(component.endpoint).toBeDefined();
  });

});
