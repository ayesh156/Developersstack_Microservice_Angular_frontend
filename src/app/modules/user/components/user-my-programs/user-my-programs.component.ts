import { Component } from '@angular/core';
import {ProgramWidgetComponent} from "../widgets/program-widget/program-widget.component";

@Component({
  selector: 'app-user-my-programs',
  standalone: true,
  imports: [
    ProgramWidgetComponent
  ],
  templateUrl: './user-my-programs.component.html',
  styleUrl: './user-my-programs.component.scss'
})
export class UserMyProgramsComponent {

}
