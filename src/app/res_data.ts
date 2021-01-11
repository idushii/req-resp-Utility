export interface ILogger {
  info: DeviceInfo;
  log: { [x: string]: ResData };
}

export interface DeviceInfo {
  deviceName: string;
  deviceVersion: string;
  identifier: string;
  product: string;
}

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
  headers_response: { [x: string]: string };
  headers: { [x: string]: string };
}
