import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student-service';
import { CharactersResponse } from '../common/components/table/models/characters-response.model';
import { DataTable } from '../common/components/table/models/data-table.model';
import { DataTableMapper } from '../common/components/table/mappers/mapper-to-data-table-model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

  /**
   * error message
   */
  resultMessage: string;

  /**
   * response api
   */
  charactersResponse: CharactersResponse[];

  /**
   * model information to show the api response
   */
  dataModel: DataTable[];

  constructor(private studentService: StudentService) {
    this.dataModel = [];
    this.resultMessage = '';
   }

  ngOnInit(): void {
    this.getStudents();
  }

  /**
   * Get response to api and validate if return information
   */
  protected getStudents(): any {
    this.studentService.getStudents().subscribe(
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
