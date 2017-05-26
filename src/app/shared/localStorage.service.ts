import { Injectable } from '@angular/core';

@Injectable()
export class localStorageService {

  constructor() {}
  get(key) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
  }
  set(key, value) {
    const data = JSON.stringify(value);
    if (data) {
      localStorage.setItem(key, data);
    }
  }
  clearAll() {
    localStorage.clear();
  }
}
