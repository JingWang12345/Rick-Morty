import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

constructor(private http:HttpClient){}

  getCharacters(page:number):Observable<Character[]> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character/?page='+page).pipe(
      map(data => data.results)
    )
  }


}
