import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  baseUrl = "https://notefulapp.herokuapp.com/api";
}
