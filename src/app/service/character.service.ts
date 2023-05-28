import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../model/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

constructor(private http:HttpClient){}

  getCharacters():Observable<Character[]> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character').pipe(
      map(data => data.results)
    )
  }


}
