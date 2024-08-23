import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatLabel} from "@angular/material/input";
import {Component} from "@angular/core";

@Component({
  selector: 'app-new-subject',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormField, MatInput, MatLabel],
  templateUrl: './new-subject.component.html',
  styleUrl: './new-subject.component.scss'
})
export class NewSubjectComponent {

}

