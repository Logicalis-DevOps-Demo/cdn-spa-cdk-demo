import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamodbCRUDComponent } from './dynamodb-crud.component';
import { AppModule } from '../app.module';
import {APP_BASE_HREF} from '@angular/common';

describe('DynamodbCRUDComponent', () => {
  let component: DynamodbCRUDComponent;
  let fixture: ComponentFixture<DynamodbCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamodbCRUDComponent ],
      imports: [ AppModule ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
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

  it('getUserCompleteResponse', () => {
    component.getUserCompleteResponse()
    expect(component.usersTable.length).toBeLessThanOrEqual(1);
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
