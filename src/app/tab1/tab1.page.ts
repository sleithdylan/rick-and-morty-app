import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  title = 'rick-and-morty-app';
  // Initializes movies from API as an empty array
  results: any = [];

  constructor(private cS: CharactersService) {}

  ngOnInit() {
    // Gets data from array 'movies' from the API
    this.cS.getCharacters().subscribe((data) => {
      // Returns data from MovieAPI
      this.results = data.results;
      console.log(this.results);
    });
  }
}
