import { Component } from '@angular/core';
import {
MatTableModule
} from "@angular/material/table";
export interface PeriodicElement {
  subjectId: number;
  subject: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {subjectId: 1234, subject: 'JavaScript', status:'true'},
  {subjectId: 1234, subject: 'JavaScript', status:'true'},
  {subjectId: 1234, subject: 'JavaScript', status:'true'},
];

@Component({
  selector: 'app-user-subjects',
  standalone: true,
    imports: [
      MatTableModule,
    ],
  templateUrl: './user-subjects.component.html',
  styleUrl: './user-subjects.component.scss'
})
export class UserSubjectsComponent {
  displayedColumns: string[] = ['subjectId', 'subject', 'status'];
  dataSource = ELEMENT_DATA;
}
