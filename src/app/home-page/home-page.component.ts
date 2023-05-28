import { Component } from '@angular/core';
import { Character } from '../model/Character';
import { CharacterService } from '../service/character.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {


  characters: Character[] = [];

  constructor(private characterServ: CharacterService) {
    this.loadCharacters();
  }

  loadCharacters() {

    this.characterServ.getCharacters().subscribe({
      next: chars => {
        console.log(chars);

        this.characters=chars
      },
      error: err => console.log(err)

    })
  }
}
