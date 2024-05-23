import { Construct, IConstruct } from 'constructs';
import {Tags} from 'aws-cdk-lib';


export interface NormativeTaggingProps {
    proveedor: string,
    entidadpagadora: string,
    ceco: string,
    proyecto: string,
    supervision: string,
    responsableTecnico: string,
    entorno: string,
    area?: string,
    subproyecto?: string,
    modulo?: string,
    capa?: string,
}



export class NormativeTagging extends Construct {

    constructor(scope: Construct, id: string,resource: IConstruct, props: NormativeTaggingProps) {
        super(scope, id);
        
        //Obligatorios
        Tags.of(resource).add('proyecto',props.proyecto);
        Tags.of(resource).add('proveedor',props.proveedor);
        Tags.of(resource).add('entidadpagadora',props.entidadpagadora);
        Tags.of(resource).add('ceco',props.ceco);
        Tags.of(resource).add('supervision',props.supervision);
        Tags.of(resource).add('responsabletecnico',props.responsableTecnico);
        Tags.of(resource).add('entorno',props.entorno);

        //Opcionales
        if (typeof props.area !== 'undefined') {Tags.of(resource).add('area',props.area)};
        if (typeof props.subproyecto !== 'undefined') {Tags.of(resource).add('area',props.subproyecto)};
        if (typeof props.modulo !== 'undefined') {Tags.of(resource).add('area',props.modulo)};
        if (typeof props.capa !== 'undefined') {Tags.of(resource).add('area',props.capa)};

    }
    
}