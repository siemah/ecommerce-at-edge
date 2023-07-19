export interface RequestConfigTypes {
  url: string;
  requestConfig?: RequestInit | undefined;
}

export interface ResponseConfigTypes {
  code: string;
  errors: Record<string, any>;
}

export default async function httpRequest<Response = Record<string, string>>(config: RequestConfigTypes, responseConfig?: ResponseConfigTypes | undefined) {
  let response;

  try {
    const request = await fetch(config.url, config.requestConfig);
    response = await request.json();
  } catch (error) {
    const _error = error as Error;
    const customErrorResponse = {
      code: "failed",
      status: 400,
      errors: {
        global: _error?.message
      }
    }
    response = responseConfig ?? customErrorResponse;
  }

  return response as Response;
}