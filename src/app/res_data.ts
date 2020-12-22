export interface ResData {
  status: string;
  id: number;
  action: string;
  method: string;
  duration: number;
  params: string;
  payload: string;
  createdAt: string;
  responseAt: string;
  url: string;
  headers_response: {[x: string]: string};
  headers: {[x: string]: string};
}
