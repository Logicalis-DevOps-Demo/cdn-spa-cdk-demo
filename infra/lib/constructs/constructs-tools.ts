import {ACMClient,ImportCertificateCommand} from "@aws-sdk/client-acm";



// Import certificate from pem files to ACM
export async function createcert(filepathcacrt: string,filepathkey: string,filepathcrt: string){

    const client = new ACMClient({region: 'us-east-1'});
    const fs = require('fs');
     
    const cacrt =  fs.readFileSync(filepathcacrt, 'utf8');
    const keypem =  fs.readFileSync(filepathkey, 'utf8');
    const crtpem =  fs.readFileSync(filepathcrt, 'utf8');
    
    const util = require('node:util');
  
    var enc = new util.TextEncoder();
  
    var params = {
        Certificate: enc.encode(crtpem), 
        PrivateKey: enc.encode(keypem), 
        CertificateChain: enc.encode(cacrt),
    };
   
    try {
  
      const command = new ImportCertificateCommand(params);
      let data =  await client.send(command);
      return  data['CertificateArn'];
  
    } catch (error) {
      return error;
    }
}