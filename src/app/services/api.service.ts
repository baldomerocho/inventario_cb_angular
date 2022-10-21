import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment.prod';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base = environment.base;

  constructor(private http: HttpClient) {
  }

  //get all the posts with APP_URL promise HTTPCLIENT GET
  getData(path: string) {
    const getdata = `${this.base}/${path}`;

    return this.http.get(getdata, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    });
  }

  postData(model: any, path: string) {
    return this.http.post(`${this.base}/${path}`, model, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    });
  }

  putData(model: any, path: string) {
    return this.http.put(`${this.base}/${path}`, model, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    });
  }

  deleteData(path: string) {
    return this.http.delete(`${this.base}/${path}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    });
  }

}
