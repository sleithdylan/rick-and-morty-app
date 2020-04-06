import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  // API
  url: string = 'https://rickandmortyapi.com/api/character/';

  constructor(public http: HttpClient) {}
  getCharacters(): Observable<any> {
    // Returns data from API
    return this.http.get(this.url);
  }
}
