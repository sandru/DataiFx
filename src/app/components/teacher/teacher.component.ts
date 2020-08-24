import { Component, OnInit } from '@angular/core';
import { DataTable } from '../common/components/table/models/data-table.model';
import { CharactersResponse } from '../common/components/table/models/characters-response.model';
import { DataTableMapper } from '../common/components/table/mappers/mapper-to-data-table-model';
import { TeacherService } from './services/teacher-service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html'
})
export class TeacherComponent implements OnInit {

  /**
   * response api
   */
  charactersResponse: CharactersResponse[];

  /**
   * model information to show the api response
   */
  dataModel: DataTable[];

  /**
   * error message
   */
  resultMessage: string;

  constructor(private teacherService: TeacherService) {
    this.dataModel = [];
    this.resultMessage = '';
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  /**
   * Get response to api and validate if return information
   */
  private getTeachers(): any {
    this.teacherService.getTeachers().subscribe(
      response => {
        this.charactersResponse = response;
        if (this.charactersResponse.length === 0) {
          this.resultMessage = 'the house does not have results';
        }
        this.dataModel = DataTableMapper(this.charactersResponse);
      },
      (error) => {
        this.resultMessage = 'an error has occurred, try again' + error;
      }
    );
  }

}
