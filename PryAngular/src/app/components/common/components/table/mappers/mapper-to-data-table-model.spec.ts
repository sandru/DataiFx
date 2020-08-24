import { CharactersResponse } from '../models/characters-response.model';
import { DataTable } from '../models/data-table.model';
import { DataTableMapper } from './mapper-to-data-table-model';

describe('mapper-custom-table Mapper', () => {
  let characters: CharactersResponse[] = [];
  let charactersEmpty: CharactersResponse[] = [];

  beforeEach(() => {
    characters = [
      {
        name: 'Minerva McGonagall',
        patronus: 'human',
        dateOfBirth: '04-10-1925',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
        hogwartsStaff: true,
        hogwartsStudent: false,
      },
      {
        name: 'Rubeus Hagrid',
        patronus: '',
        dateOfBirth: '06-12-1928',
        image: 'http://hp-api.herokuapp.com/images/hagrid.png',
        hogwartsStaff: false,
        hogwartsStudent: true,
      },
    ];
  });

  it('should return DataTable with 2 objects', () => {
    const dataArray: DataTable[] = DataTableMapper(characters);
    expect(dataArray.length).toEqual(2);
    expect(dataArray[0].name).toEqual('Minerva McGonagall');
    expect(dataArray[1].name).toEqual('Rubeus Hagrid');
  });

  it('should return DataTable empty', () => {
    const dataArray: DataTable[] = DataTableMapper(charactersEmpty);
    expect(dataArray.length).toEqual(0);
  });
});
