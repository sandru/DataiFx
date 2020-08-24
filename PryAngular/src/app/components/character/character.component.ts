import { Component, OnInit } from '@angular/core';
import { Config } from './../../../resources/config';
import { CharacterService } from './services/character-service';
import { DataTable } from '../common/components/table/models/data-table.model';
import { CharactersResponse } from '../common/components/table/models/characters-response.model';
import { DataTableMapper } from '../common/components/table/mappers/mapper-to-data-table-model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  /**
   * List houses for dropdown, is configurable in config file
   */
  houses: string[];

  /**
   * response api
   */
  charactersResponse: CharactersResponse[];

  /**
   * response api and only contains staff type
   */
  charactersStaff: DataTable[];

  /**
   * response api and only contains student type
   */
  charactersStudents: DataTable[];

  /**
   * error message
   */
  resultMessage: string;

  /**
   * Get response to api and validate if return information
   */
  constructor(private characterService: CharacterService) {
    this.charactersStaff = [];
    this.charactersStudents = [];
    this.houses = Config.houses;
    this.resultMessage = '';
  }

  ngOnInit(): void {}

  /**
   * Get response to api and validate if return information
   * @param houseName type data for send to the api
   */
  public getCharactersByHouse(houseName: string): any {
    this.charactersResponse = [];
    this.charactersStaff = [];
    this.charactersStudents = [];
    this.characterService.getCharacters(houseName).subscribe(
      (response) => {
        this.charactersResponse = response;
        if (this.charactersResponse.length === 0) {
          this.resultMessage = 'the house does not have results';
        } else {
          this.resultMessage = '';
          this.charactersStaff = DataTableMapper(
            this.charactersResponse.filter((x) => x.hogwartsStaff === true)
          );
          this.charactersStudents = DataTableMapper(
            this.charactersResponse.filter((x) => x.hogwartsStudent === true)
          );
        }
      },
      (error) => {
        this.resultMessage = 'an error has occurred, try again' + error;
      }
    );
  }
}
