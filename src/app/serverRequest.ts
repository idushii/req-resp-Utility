export interface ServerRequest {
    id: number,
    url: string,
    code: number,
    status: string,
    method: string,
    headers: {[x: string]: string},
    headers_response: {[x: string]: string},
    payload: any[],
    response: any[],
    duration: number,
    action: string
}
