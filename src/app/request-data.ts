import { ServerRequest } from './serverRequest';

export class RequestData {
  readonly id: number;
  readonly RequestURL: string;
  readonly Code_pending: number;
  readonly Status_pending: string;
  readonly Method_pending: string;
  readonly Headers_pending: {};
  readonly Headers_response_pending: {};
  readonly Payload_pending: any[];
  readonly Response_pending: any[];
  readonly Duration_pending: number;
  readonly Action_pending: string;
  readonly Code_done: number
  readonly Status_done: string;
  readonly Headers_done: {};
  readonly Headers_response_done: {};
  readonly Payload_done: any[];
  readonly Response_done: any[];
  readonly Duration_done: number;
  readonly Action_done: string

  constructor( data: ServerRequest ) {
    if(data.status === 'pending') {
      this.id = data.id,
      this.RequestURL = data.url,
      this.Code_pending = data.code,
      this.Status_pending = data.status,
      this.Method_pending = data.method,
      this.Headers_pending = data.headers,
      this.Headers_response_pending = data.headers_response,
      this.Payload_pending = data.payload,
      this.Response_pending = data.response,
      this.Duration_pending = data.duration,
      this.Action_pending = data.action
    }
    if(data.status === 'done') {
      this.id = data.id,
      this.RequestURL = data.url,
      this.Code_done = data.code,
      this.Status_done = data.status,
      this.Headers_done = data.headers,
      this.Headers_response_done = data.headers_response,
      this.Payload_done = data.payload,
      this.Response_done = data.response,
      this.Duration_done = data.duration,
      this.Action_done = data.action
    }
  }
}
