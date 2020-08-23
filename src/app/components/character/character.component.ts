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
  characteresResponse: CharactersResponse[];

  /**
   * response api and only contains staff type
   */
  characteresStaff: DataTable[];

  /**
   * response api and only contains student type
   */
  characteresStudents: DataTable[];

  /**
   * error message
   */
  resultMessage: string;

  /**
   * Get response to api and validate if return information
   */
  constructor(private characterService: CharacterService) {
    this.characteresStaff = [];
    this.characteresStudents = [];
    this.houses = Config.houses;
    this.resultMessage = '';
  }

  ngOnInit(): void {}

  /**
   * Get response to api and validate if return information
   * @param houseName type data for send to the api
   */
  public getCharactersByHouse(houseName: string): any {
    this.characteresStaff = [];
    this.characteresStudents = [];
    this.characterService.getHouse(houseName).subscribe(
      (response) => {
        this.characteresResponse = response;
        if (this.characteresResponse.length === 0) {
          this.resultMessage = 'the house does not have results';
        } else {
          this.resultMessage = '';
          this.characteresStaff = DataTableMapper(
            this.characteresResponse.filter((x) => x.hogwartsStaff === true)
          );
          this.characteresStudents = DataTableMapper(
            this.characteresResponse.filter((x) => x.hogwartsStudent === true)
          );
        }
      },
      (error) => {
        this.resultMessage = 'an error has occurred, try again' + error;
      }
    );
  }
}
