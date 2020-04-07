import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'rick-and-morty-app';
  // Initializes movies from API as an empty array
  results: any = [];

  constructor(private cS: CharactersService) {}

  ngOnInit() {
    // Gets data from array 'movies' from the API
    this.cS.getCharacters().subscribe((req) => {
      // Returns data from MovieAPI
      this.results = req.results;
      console.log(this.results);
    });
  }
}
