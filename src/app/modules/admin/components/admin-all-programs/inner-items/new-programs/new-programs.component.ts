import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  MatDialogModule,
} from "@angular/material/dialog";
import { MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {provideNativeDateAdapter} from "@angular/material/core";
import {NewSubjectComponent} from "../../../admin-subjects/inner-items/new-subject/new-subject.component";
import {MatButton} from "@angular/material/button";

@Component({
  templateUrl: './new-programs.component.html',
  styleUrl: './new-programs.component.scss',
  selector: 'app-new-programs',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatButton
  ],
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProgramsComponent {

}
