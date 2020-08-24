import { Component, OnInit, Input } from '@angular/core';
import { StudentData } from '../student-data-form/models/student-data.model';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
})
export class StudentRequestComponent implements OnInit {
  /**
   * model for storage information
   */
  requests: StudentData[];

  constructor() {}

  ngOnInit(): void {
    this.requests = [];
    this.getRequests();
  }

  /**
   * Get storage information and convert in JSON for show it
   */
  private getRequests() {
    const storage = localStorage.getItem('studentRequest');
    if (storage) {
      this.requests = JSON.parse(storage);
    }
  }
}
