interface FetchResponse<T> {
  status: number;
  data: T;
}
// TODO: abort controller?
export const fetchHelper = async <T>(url: RequestInfo, { body, method = 'GET', headers = { 'Content-Type': 'application/json' } }: {
  body?: unknown;
  method?: string;
  headers?: Record<string, string>;
} = {}, { forceRawData = false }: { forceRawData?: boolean; }): Promise<FetchResponse<T>> => {
  const options = {
    method,
    headers,
  } as RequestInit;
  if (body && method === 'GET') {
    url = `${url}?${new URLSearchParams({ ...body })}`;
  } else if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(url, options);
  const data = forceRawData ? response : await response.json();
  return {
    status: response.status, data,
  };
};
