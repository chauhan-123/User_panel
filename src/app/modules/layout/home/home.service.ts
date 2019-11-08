import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = "http://localhost:3000/"
  constructor( private http:HttpService , private httpClient:HttpClient) { }

  
  getBookListing(data) {
    data.page = data.page - 1;
    return this.httpClient.get<any>(this.baseUrl + `get_book`, { params: data });
 }

 getBooksDetails(userId){
  return this.httpClient.get<any>(this.baseUrl + `books_details`, { params: userId });
    }
}
