import { Component } from '@angular/core';
import {MatTableModule} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  transaction: number;
  date: string;
  amount: number;
  user: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transaction: 1234, date: 'jan 10, 2023', amount: 25000, name: 'Master Program', user:'Eshara Uddipana'},
  {transaction: 1234, date: 'jan 10, 2023', amount: 25000, name: 'Master Program', user:'Eshara Uddipana'},
  {transaction: 1234, date: 'jan 10, 2023', amount: 25000, name: 'Master Program', user:'Eshara Uddipana'},

];
@Component({
  selector: 'app-admin-payments',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './admin-payments.component.html',
  styleUrl: './admin-payments.component.scss'
})
export class AdminPaymentsComponent {
  displayedColumns: string[] = ['transaction', 'amount', 'date', 'name','user'];
  dataSource = ELEMENT_DATA;
}
