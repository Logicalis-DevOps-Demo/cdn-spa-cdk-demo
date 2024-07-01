import { Component, OnInit,Input } from '@angular/core';
import { ConfigService,  Result } from './apicall.service';
import { FormControl } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.scss'],
  providers: [ ConfigService ],
})


export class ApiCallComponent implements OnInit {
  
  endpoint = new FormControl(''); 
  public resultado: string | undefined;
  public resultadoObject: Result | undefined;
  public error: any;
  response: string | undefined;

  constructor(private service: ConfigService) { 
    
  }
 

  ngOnInit(): void {
    
    // this method is called when the component is loaded and no action needed here    
  }

  showBody(){
   this.service.getResult(this.endpoint.value!).subscribe((data: Result) => this.resultadoObject = {
      message: data.message,
      time:  data.time,
     });
  }

  showResponse() {
    this.service.getCompleteResponse(this.endpoint.value!)
      // resp is of type `HttpResponse<Result>`
      .subscribe(resp => {
        // access the body directly, which is typed as `Config`.
        this.response = JSON.stringify(resp);
        this.resultado = JSON.stringify({ ...resp.body! });
      });
  }


}
