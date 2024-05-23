import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamodbCRUDComponent } from './dynamodb-crud.component';
import { AppModule } from '../app.module';

describe('DynamodbCRUDComponent', () => {
  let component: DynamodbCRUDComponent;
  let fixture: ComponentFixture<DynamodbCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamodbCRUDComponent ],
      imports: [ AppModule ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamodbCRUDComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('put User', () => {
    const fixture = TestBed.createComponent(DynamodbCRUDComponent);
    component = fixture.componentInstance;
    component.putUser()
    expect(component.resultadoObject?.message).toBeUndefined();
  });

  it('putUserCompleteResponse', () => {
    const fixture = TestBed.createComponent(DynamodbCRUDComponent);
    component = fixture.componentInstance;
    component.putUserCompleteResponse()
    expect(component.response).toBeUndefined();
  });

  it('getUserCompleteResponse', () => {
    const fixture = TestBed.createComponent(DynamodbCRUDComponent);
    component = fixture.componentInstance;
    component.getUserCompleteResponse()
    expect(component.usersTable).toBeDefined();
  });

  it('deleteUserCompleteResponse', () => {
    const fixture = TestBed.createComponent(DynamodbCRUDComponent);
    component = fixture.componentInstance;
    component.deleteUserCompleteResponse()
    expect(component.resultado).toBeUndefined();
  });

  it('ngOnInit', () => {
    const fixture = TestBed.createComponent(DynamodbCRUDComponent);
    component = fixture.componentInstance;
    component.ngOnInit()
    expect(component.endpoint).toBeDefined();
  });


});
