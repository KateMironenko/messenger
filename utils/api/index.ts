import { queryStringify } from "../mydash/queryStringify";

enum METHODS {
  GET,
  POST,
  PUT,
  DELETE,
}
class HTTPTransport {
  get = (url: string, options: any = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  post = (url: string, options: any = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  put = (url: string, options: any = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  delete = (url: string, options: any = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request = (url: string, options: any = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
