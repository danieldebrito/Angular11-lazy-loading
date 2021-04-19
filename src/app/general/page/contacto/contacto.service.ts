import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface cards {
  redirectTo: string;
  name: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor( private http: HttpClient ) { }

  getItems(): any{
    return this.http.get<cards[]>('/assets/cards/cards.json');
  }
}
