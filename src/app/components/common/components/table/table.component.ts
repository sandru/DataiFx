import { Component, OnInit, Input } from '@angular/core';
import { DataTable } from './models/data-table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input()
  information: DataTable[];

  constructor() { }

  ngOnInit(): void {
  }

}
