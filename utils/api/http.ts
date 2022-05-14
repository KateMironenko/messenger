
enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
class HTTPT {
  public mainUrl: string;
  constructor(mainUrl: string = '/') {
    this.mainUrl = mainUrl;
  }

  get = (url: string, options: any = {}) => {
    return this.request(
      this.mainUrl + url,
      { ...options, method: Methods.GET },
      options.timeout
    );
  };

  post = (url: string, options: any = {}) => {
    return this.request(
      this.mainUrl + url,
      { ...options, method: Methods.POST },
      options.timeout
    );
  };

  put = (url: string, options: any = {}) => {
    return this.request(
      this.mainUrl + url,
      { ...options, method: Methods.PUT },
      options.timeout
    );
  };

  delete = (url: string, options: any = {}) => {
    return this.request(
      this.mainUrl + url,
      { ...options, method: Methods.DELETE },
      options.timeout
    );
  };

  request = (url: string, options: any = {}, timeout = 5000) => {
    const { headers = {'Content-Type': 'application/json'}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, url);


      Object.keys(headers).forEach((key) => {
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
      if (!data) {
        xhr.send();
      }
       else {
        xhr.send(data);
      }
    });
  };
}

export default HTTPT;
