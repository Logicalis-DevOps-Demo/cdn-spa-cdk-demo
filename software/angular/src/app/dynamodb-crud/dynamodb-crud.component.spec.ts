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
    component.putUser()
    expect(component.resultadoObject?.message).toBeUndefined();
  });

  it('putUserCompleteResponse', () => {
    component.putUserCompleteResponse()
    expect(component.response).toBeUndefined();
  });

  it('getUserCompleteResponse', () => {
    component.getUserCompleteResponse()
    expect(component.usersTable).toBeDefined();
  });

  it('deleteUserCompleteResponse', () => {
    component.deleteUserCompleteResponse()
    expect(component.resultado).toBeUndefined();
  });

  it('ngOnInit', () => {
    component.ngOnInit()
    expect(component.endpoint).toBeDefined();
  });


});
