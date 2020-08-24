import { CharactersResponse } from '../models/characters-response.model';
import { DataTable } from '../models/data-table.model';

export function DataTableMapper(characters: CharactersResponse[]): DataTable[] {
  let dataArray: DataTable[] = [];

  characters.forEach((character) => {
    dataArray.push({
      name: character.name,
      patronus: character.patronus,
      image: character.image,
      age: getAge(character.dateOfBirth),
    });
  });

  return dataArray;
}

function getAge(dateOfBirth: string): any {
  if (dateOfBirth) {
    const birth = new Date(dateOfBirth);
    if (!isNaN(birth.getTime())) {
      const diff = Math.abs(Date.now() - birth.getTime());
      return Math.floor(diff / (1000 * 3600 * 24) / 365);
    }
  }
}
