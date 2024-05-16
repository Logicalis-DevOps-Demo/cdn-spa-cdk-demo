import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PublicSpa } from './constructs/PublicSpa';



export class InfraStack extends cdk.Stack {
  
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const publicspa = new PublicSpa(this, 'PublicSpa', {
      name: "spa-test",
      indexDocument: "index.html",
      websiteDistSourcePath: "../software/angular/dist/spa-aws-angular-poc",
    });


  }


}
