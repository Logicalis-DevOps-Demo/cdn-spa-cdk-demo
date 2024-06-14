 import * as cdk from 'aws-cdk-lib';
 import { Template } from 'aws-cdk-lib/assertions';
 import * as Infra from '../lib/infra-stack';
 import {Bucket,BlockPublicAccess,BucketEncryption} from 'aws-cdk-lib/aws-s3';
 import { CodeConfig } from "aws-cdk-lib/aws-lambda";
 
// example test. To run these tests, uncomment this file along with the
// example resource in lib/infra-stack.ts
test('S3 Bucket', () => {
   const app = new cdk.App();
     // WHEN
   const stack = new Infra.InfraStack(app, 'MyTestStack');
     // THEN
   const template = Template.fromStack(stack);

   template.hasResourceProperties('AWS::S3::Bucket', {
    "BucketName": "spa-spa-test"
   });
});



test('CloudfronDIst', () => {
    const app = new cdk.App();
      // WHEN
    const stack = new Infra.InfraStack(app, 'MyTestStack');
      // THEN
    const template = Template.fromStack(stack);
 
    template.hasResourceProperties('AWS::CloudFront::Distribution', {
        "DistributionConfig": {"DefaultRootObject": "index.html"}
    });
 });


// Clean up after all tests
afterAll(() => {
  global.gc && global.gc()
});