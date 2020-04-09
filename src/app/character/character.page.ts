import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  title = 'rick-and-morty-app';
  // Initializes results from API as an empty array
  results: any = [];

  constructor(private cS: CharactersService) {}

  ngOnInit() {
    // Gets data from array 'results' from the API
    this.cS.getCharacters().subscribe((req) => {
      // Returns data from API
      this.results = req.results;
      console.log(this.results);
    });
  }
}
