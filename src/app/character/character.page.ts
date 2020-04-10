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
  // Initializes details
  details: any;

  constructor(private route: ActivatedRoute, private charService: CharactersService) {}

  ngOnInit() {
    this.loadCharacterDetails();
  }

  loadCharacterDetails() {
    // Gets id
    let id = this.route.snapshot.paramMap.get('id');
    // Gets character data by id
    this.charService.getCharactersDetails(id).subscribe((req) => {
      // Returns character details from API
      this.details = req;
      // console.log(req);
    });
  }
}
