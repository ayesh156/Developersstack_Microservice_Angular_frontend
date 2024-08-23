import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatTableModule
} from "@angular/material/table";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { NewSubjectComponent} from "./inner-items/new-subject/new-subject.component";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

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
  selector: 'app-admin-subjects',
  standalone: true,
  imports: [
    MatTableModule,
    MatButton,
  ],
  templateUrl: './admin-subjects.component.html',
  styleUrl: './admin-subjects.component.scss'
})
export class AdminSubjectsComponent {
  constructor(private matDialog:MatDialog) {
  }

  displayedColumns: string[] = ['subjectId', 'subject', 'status'];
  dataSource = ELEMENT_DATA;

  openNewSubjectForm(){
    let modalData = this.matDialog.open(NewSubjectComponent, {
      width: '500px',
      disableClose: true
    });

    modalData.afterClosed().subscribe(response=>{
      if (response) {
        // load all subject here
      }
    })
  }

}


