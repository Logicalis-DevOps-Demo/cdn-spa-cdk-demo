import {Construct} from 'constructs';
import {Bucket,BlockPublicAccess,BucketEncryption} from 'aws-cdk-lib/aws-s3';
import {BucketDeployment,Source,ServerSideEncryption} from 'aws-cdk-lib/aws-s3-deployment';
import {Distribution,OriginAccessIdentity} from 'aws-cdk-lib/aws-cloudfront';
import {S3Origin} from "aws-cdk-lib/aws-cloudfront-origins";
import { RemovalPolicy } from 'aws-cdk-lib';
import {Key} from 'aws-cdk-lib/aws-kms'
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cdk from 'aws-cdk-lib';

export interface PublicSpaProps {
    name: string,
    indexDocument: string,
    websiteDistSourcePath: string,
}


export class PublicSpa extends Construct {

    constructor(scope: Construct, id: string, props: PublicSpaProps) {
        super(scope, id);


        // Create a private S3 bucket
        const sourceBucket = new Bucket(this, `spa-bucket`, {
            bucketName: `spa-${props.name}`,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            autoDeleteObjects: true,
            removalPolicy: RemovalPolicy.DESTROY,
            encryption: BucketEncryption.S3_MANAGED,
         //   encryptionKey: key
        });

        const role = new iam.Role(this, 'lambdaRole', {
            assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),

        });
        role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('PowerUserAccess'));
        sourceBucket.grantReadWrite(role);
     
        // Create access identity, and grant read access only, we will use this identity in CloudFront
        const originAccessIdentity = new OriginAccessIdentity(this, 'OIA-spa', {
            comment: `Setup access from CloudFront to the spa-${props.name} bucket ( read )`
        });
        
        sourceBucket.grantRead(originAccessIdentity);
        

        //Deploy the source code (dist) from the app folder.
        new BucketDeployment(this, `bucket-deploy-spa`, {sources: [Source.asset(props.websiteDistSourcePath)],
                                                         destinationBucket: sourceBucket,
                                                        // serverSideEncryptionAwsKmsKeyId: key.keyId,
                                                         serverSideEncryption: ServerSideEncryption.AES_256,
                                                         role:role
                                                        }
        );

        const noCachePolicy = new cdk.aws_cloudfront.CachePolicy(this, `noCachePolicy`, {
            cachePolicyName: `noCachePolicy`,
            defaultTtl: cdk.Duration.minutes(0),
            minTtl: cdk.Duration.minutes(0),
            maxTtl: cdk.Duration.minutes(0),
      
        });

       // Create the CloudFront Distribution
       const cf = new Distribution(this, "CloudFrontDistribution", {
            defaultBehavior: { origin: new S3Origin(sourceBucket,{originAccessIdentity: originAccessIdentity}) },
            defaultRootObject: props.indexDocument,
            cachePolicy: noCachePolicy,

        });

    }


}

