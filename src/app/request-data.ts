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
    this.id = data.id,
    this.RequestURL = data.RequestURL,
    this.Code_pending = data.Code_pending,
    this.Status_pending = data.Status_pending,
    this.Method_pending = data.Method_pending,
    this.Headers_pending = data.Headers_pending,
    this.Headers_response_pending = data.Headers_response_pending,
    this.Payload_pending = data.Payload_pending,
    this.Response_pending = data.Response_pending,
    this.Duration_pending = data.Duration_pending,
    this.Action_pending = data.Action_pending,
    this.Code_done = data.Code_done,
    this.Status_done = data.Status_done,
    this.Headers_done = data.Headers_done,
    this.Headers_response_done = data.Headers_response_done,
    this.Payload_done = data.Payload_done,
    this.Response_done = data.Response_done,
    this.Duration_done = data.Duration_done,
    this.Action_done = data.Action_done
    }
}
