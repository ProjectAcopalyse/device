import { Observable, of } from "rxjs";

export type Type = string;
export type Output = string;



export interface Device {
    type: Type;
    info?: Device.Info;
}

export namespace Device {
    export type Info = Record<string, any>;

    export interface Operation<Params> {
        name: string;
        execute(device: Device, params: Params): Observable<OperationResult>;
    }

    export interface OperationResult {
        type: Type;
        output?: Output;
        error?: Output;
    }

    export const OPERATION_SUCCESS: Type = 'OPERATION_SUCCESS';
    export const OPERATION_FAILURE: Type = 'OPERATION_FAILURE';
}