import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  title = 'rick-and-morty-app';
  // Initializes results from API as an empty array
  results: any = [];
  details: any;

  constructor(private route: ActivatedRoute, private charService: CharactersService) {}

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    // Gets data from array 'results' from the API
    this.charService.getCharactersDetails(index).subscribe((req) => {
      // Returns data from API
      this.details = req;
      console.log(req);
    });
  }

  getCharacters() {
    // Gets data from array 'results' from the API
    this.charService.getCharacters().subscribe((req) => {
      // Returns data from API
      this.results = req.results;
      console.log(this.results);
    });
  }
}
