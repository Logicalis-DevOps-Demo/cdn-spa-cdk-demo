import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamodbCRUDComponent } from './dynamodb-crud.component';

describe('DynamodbCRUDComponent', () => {
  let component: DynamodbCRUDComponent;
  let fixture: ComponentFixture<DynamodbCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamodbCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamodbCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
