import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'rick-and-morty-app';
  // Initializes results, loadedResults, search, hidden
  results: any = [];
  loadedResults: any[];
  search: string;
  hidden: boolean;

  constructor(private cS: CharactersService) {
    this.search = '';
    this.hidden = false;
  }

  ngOnInit() {
    // Gets data from array 'results' from the API
    this.cS.getCharacters().subscribe((req) => {
      // Returns data from API
      this.results = req.results;
      this.loadedResults = req.results;
      console.log(this.results);
    });
  }

  // Resets results array
  initializeResults(): void {
    this.results = this.loadedResults;
  }

  filterList(event) {
    this.initializeResults();

    // Gets search term
    const searchTerm = event.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.results = this.results.filter((currentResult) => {
      if (currentResult.name && searchTerm) {
        // Checks if result name matches search term
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
