  import {Injectable} from '@angular/core';
  import { Router } from '@angular/router';
  import {Http, Headers, Response, Request, BaseRequestOptions, RequestMethod} from '@angular/http';
  import {Observable} from 'rxjs/Rx';
  import { localStorageService } from './localStorage.service';

  @Injectable()
  export class HttpClientService {
    constructor(private http: Http, private router: Router,
    private localStorageService: localStorageService) {}

    get(url: string): Observable<Response> {
      return this.request(url, RequestMethod.Get);
    }

    post(url: string, body: any, headers?: any) : Observable<Response> {
      return this.request(url, RequestMethod.Post, body, headers);
    }

    put(url: string, body: any, headers?: any) : Observable<Response> {
      return this.request(url, RequestMethod.Put, body, headers);
    }

    delete(url: string, body: any, headers?: any) : Observable<Response> {
      return this.request(url, RequestMethod.Delete, body, headers);
    }

    private request(url: string, method: RequestMethod, body?: any, customHeaders: any = {}): Observable<Response> {
      const headers = Object.assign(new Headers(), customHeaders);
      this.addAuthHeaders(headers);
      // set request options
      const options = new BaseRequestOptions();
      options.headers = headers;
      options.url = url;
      options.method = method;
      options.body = body;
      options.withCredentials = true;
      const request = new Request(options);
    // finally make http request
      return this.http.request(request)
        .catch((error: any) => this.onErrorHandler(error));
    }

    private addAuthHeaders(headers: Headers) {
      // set content type to application-json
      headers.append('Content-Type', 'application/json');
      // add authorization header if we have stored
      if (this.localStorageService.get('token')) {
        headers.append('X-CSRF-Token', this.localStorageService.get('token'));
      }
    }
    private onErrorHandler(error: any) {
      const errors = error.json();
      if(error.status !== 200) {
        // handle error seperately with status code
        this.localStorageService.clearAll();
        this.router.navigate(['']);
      }
      return Observable.throw(errors);
    }
  }