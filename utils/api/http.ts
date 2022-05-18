enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
class HTTPT {
  public mainUrl: string;

  constructor(mainUrl: string = '/') {
    this.mainUrl = mainUrl;
  }

  get = (url: string, options: any = {}) => this.request(
    this.mainUrl + url,
    {...options, method: Methods.GET},
    options.timeout
  );

  post = (url: string, options: any = {}) => this.request(
    this.mainUrl + url,
    {...options, method: Methods.POST},
    options.timeout
  );

  put = (url: string, options: any = {}) => this.request(
    this.mainUrl + url,
    {...options, method: Methods.PUT},
    options.timeout
  );

  delete = (url: string, options: any = {}) => this.request(
    this.mainUrl + url,
    {...options, method: Methods.DELETE},
    options.timeout
  );

  request = (url: string, options: any = {}, timeout = 5000) => {
    const {
      headers = {'Content-Type': 'application/json'},
      method,
      data
    } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.withCredentials = true;

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      if (data) {
        xhr.send(data);
      } else {
        xhr.send();
      }
    });
  };
}

export default HTTPT;
