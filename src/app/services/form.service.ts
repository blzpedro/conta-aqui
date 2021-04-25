import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient
  ) { }

  sendMail(body: any){
    console.log("send");
    return this.http.post("https://formspree.io/f/xvodgegy", body)
  }
}
