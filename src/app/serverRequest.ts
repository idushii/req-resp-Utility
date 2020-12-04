export interface ServerRequest {
    id: number,
    URL: string,
    Code_pending: number,
    Status_pending: string,
    Method_pending: string,
    Headers_pending: {[x: string]: string},
    Headers_response_pending: {[x: string]: string},
    Payload_pending: any[],
    Response_pending: any[],
    Duration_pending: number,
    Action_pending: string
    Code_done: number,
    Status_done: string,
    Headers_done: {[x: string]: string},
    Headers_response_done: {[x: string]: string},
    Payload_done: any[],
    Response_done: any[],
    Duration_done: number,
    Action_done: string
}
