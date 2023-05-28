import { Component } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../service/character.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
page:number=1;

  characters: Character[] = [];

  constructor(private characterServ: CharacterService) {
    this.loadCharacters();
  }

  loadCharacters() {

    this.characterServ.getCharacters(this.page).subscribe({
      next: chars => {
        console.log(chars);

        this.characters=chars
      },
      error: err => console.log(err)

    })
  }
  pageUp(){
    this.page++;
    this.loadCharacters()
  }

  pageDown(){
    this.page--;
    if (this.page<1) {
      this.page=1
    }
    this.loadCharacters()
  }
}
