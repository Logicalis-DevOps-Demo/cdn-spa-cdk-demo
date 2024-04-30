import { Component, OnInit } from '@angular/core';
import {DynamoDbService,Users} from './dynamodb-crud.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamodb-crud',
  templateUrl: './dynamodb-crud.component.html',
  styleUrls: ['./dynamodb-crud.component.scss'],
  providers: [ DynamoDbService ],
})


export class DynamodbCRUDComponent implements OnInit {
  
  endpoint = new FormControl('');
  body = new FormControl('');
  userId = new FormControl('');
  public resultadoObject: Users | undefined;
  public resultado: string | undefined;
  public error: any;
  response: string | undefined;
  public usersTable: Users [] =[];
  displayedColumns: string[] = ['id', 'name', 'lastname'];




  constructor(private service: DynamoDbService) { }

  ngOnInit(): void {
  }


  putUser(){
    this.service.putUser(this.endpoint.value,this.body.value).subscribe((data: Users) => this.resultadoObject = {
       message: data.message,
       time:  data.time,
       path: data.path,
       httpmethod: data.httpmethod,

      });
  }

  putUserCompleteResponse() {
    this.service.putUserCompleteResponse(this.endpoint.value, this.body.value)
      .subscribe(resp => {
        this.response = JSON.stringify(resp);
        this.resultado = JSON.stringify({ ...resp.body! });
      });
  }


  getUserCompleteResponse() {
    this.service.getUserCompleteResponse(this.endpoint.value)
      .subscribe(resp => {

        var users: Users = { ...resp.body! };
        var result = users.message;
        this.usersTable = JSON.parse(JSON.stringify(result)).Items;

      });
  }

  deleteUserCompleteResponse() {
    this.service.deleteUserCompleteResponse(this.endpoint.value, this.userId.value)
      .subscribe(resp => {
        this.response = JSON.stringify(resp);
        this.resultado = JSON.stringify({ ...resp.body! });
      });
  }

}
