import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Stack, StackProps} from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { PublicSpa } from './constructs/PublicSpa';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //********************************** */
    //*Create VPC and subnets definition */
    //********************************** */
    /** 
    const vpc = new ec2.Vpc(this, 'jenkins-vpc', {
      vpcName: "vpc-devops-demo",
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      natGateways: 1,
      maxAzs: 2,
      subnetConfiguration: [
          {
          name: 'private-subnet',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24
          },
          {
          name: 'public-subnet',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
          }
      ],
    });
    */

    const publicspa = new PublicSpa(this, 'PublicSpa', {
      name: "spa-test",
      indexDocument: "index.html",
      websiteDistSourcePath: "../software/angular/dist/spa-aws-angular-poc",
    });

  }
}
