import { Component } from '@angular/core';
import {ProgramWidgetComponent} from "../../../user/components/widgets/program-widget/program-widget.component";
import {MatButton} from "@angular/material/button";
import {NewSubjectComponent} from "../admin-subjects/inner-items/new-subject/new-subject.component";
import {MatDialog} from "@angular/material/dialog";
import {NewProgramsComponent} from "./inner-items/new-programs/new-programs.component";

@Component({
  selector: 'app-admin-all-programs',
  standalone: true,
  imports: [
    ProgramWidgetComponent,
    MatButton
  ],
  templateUrl: './admin-all-programs.component.html',
  styleUrl: './admin-all-programs.component.scss'
})
export class AdminAllProgramsComponent {
  constructor(private matDialog:MatDialog) {
  }
  openNewProgramModal(){
    let modalData = this.matDialog.open(NewProgramsComponent, {
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
