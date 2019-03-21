import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getAll(){
    return this._http.get('/api/products');
  }
  getOne(id){
    return this._http.get(`/api/products/${id}`)
  }
  addNew(newAuthor){
    return this._http.post('/api/products', newAuthor);
  }
  deleteOne(id){
    return this._http.delete(`/api/products/${id}`);
  }
  deleteAll(){
    return this._http.delete(`/api/products`);
  }
  updateOne(id, updatedAuthor){
    return this._http.put(`/api/products/${id}`, updatedAuthor);
  }
}
