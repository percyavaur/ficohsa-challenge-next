import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.jikan.moe/v4";

axios.interceptors.request.use((config) => {
  config.headers!["Content-Type"] = "application/json";
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    if (response.data && response.data.status) handleStatus(response.data.status);
    return response;
  },
  (error: any) => {
    if (!error.response) {
    } else {
      let { status } = error.response!;
      handleStatus(status);
    }
    return "error";
  }
);

const handleStatus = (status: number) => {
  switch (status) {
    case 400:
      console.log(400);
      /*  history.replace("/400"); */
      break;
    case 401:
      console.log(401);
      break;
    case 403:
      console.log(403);
      break;
    case 404:
      console.log(404);
      /*   history.replace("/404"); */
      break;
    case 500:
      console.log(500);
      break;
  }
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url, {}).then(responseBody),
  getBlob: <T>(url: string) =>
    axios.get<T>(url, { responseType: "blob" }).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body, {}).then(responseBody),
  put: <T>(url: string, body: {}) =>
    axios.put<T>(url, body, {}).then(responseBody),
  patch: <T>(url: string, body: {}) =>
    axios.patch<T>(url, body, {}).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url, {}).then(responseBody),
};

export { requests };
