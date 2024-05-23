import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallComponent } from './apicall.component';
import { AppModule } from '../app.module';

describe('DynamodbCRUDComponent', () => {
  let component: ApiCallComponent;
  let fixture: ComponentFixture<ApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCallComponent ],
      imports: [ AppModule ],

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
});
