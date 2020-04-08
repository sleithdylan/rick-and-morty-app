import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'rick-and-morty-app';
  // Initializes movies from API as an empty array
  results: any = [];
  loadedResults: any[];
  search: string;
  hidden: boolean;

  constructor(private cS: CharactersService) {
    this.search = '';
    this.hidden = false;
  }

  ngOnInit() {
    // Gets data from array 'movies' from the API
    this.cS.getCharacters().subscribe((req) => {
      // Returns data from MovieAPI
      this.results = req.results;
      this.loadedResults = req.results;
      console.log(this.results);
    });
  }

  initializeResults(): void {
    this.results = this.loadedResults;
  }

  filterList(evt) {
    this.initializeResults();

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.results = this.results.filter((currentResult) => {
      if (currentResult.name && searchTerm) {
        if (currentResult.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  goToSelectedCharacter(id: any) {
    console.log(id);
  }
}
