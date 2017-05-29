import {localStorageService} from './../shared/localStorage.service';
import {HttpClientService} from './../shared/http-client.service';
import {Component, OnInit, Injectable} from '@angular/core';
import {appConfig} from '../shared/app.constants';
import {
			Http,
			Headers,
			Response,
			Request,
			BaseRequestOptions,
			RequestMethod
} from '@angular/http';

@Injectable()
export class genNextService {
			name : string;
			constructor(private httpService : HttpClientService, private storageService : localStorageService) {
						this.name = localStorage.getItem(name);
			}
			getTrainings() {
						const apiUrl = `${appConfig.API_URL}user/login`;
						return this
									.httpService
									.get(apiUrl)
									.map((response : Response) => {
												let res = response.json();
												if (res) {
															//TBD
												}
									});
			}
			getTrainingbyId(id) {
						const apiUrl = `${appConfig.API_URL}/${id}`;
						return this
									.httpService
									.get(apiUrl)
									.map((response : Response) => {
												let res = response.json();
												if (res) {
															//TBD
												}
									});
			}

}