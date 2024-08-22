import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseProduto } from '../../model/produto';



@Injectable({
  providedIn: 'root'
})
export class ProdutoHttpService {

  constructor(
    public http : HttpClient
  ) {}

  base: baseProduto [] = []


  getBase():Observable<baseProduto[]>{
    return this.http.get<baseProduto[]>('https://my-json-server.typicode.com/francilioalencar/mock-produtos/posts')
  }

}
