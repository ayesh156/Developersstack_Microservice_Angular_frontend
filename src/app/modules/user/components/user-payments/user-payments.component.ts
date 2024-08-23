import { Component } from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow,
  MatTable, MatTableModule
} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  transaction: number;
  date: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transaction: 1234, date: 'jan 10, 2023', amount: 25000, name: 'Master Program'},
  {transaction: 1234, date: 'jan 10, 2023', amount: 25000, name: 'Master Program'},
  {transaction: 1234, date: 'jan 10, 2023', amount: 25000, name: 'Master Program'},

];

@Component({
  selector: 'app-user-payments',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './user-payments.component.html',
  styleUrl: './user-payments.component.scss'
})
export class UserPaymentsComponent {
  displayedColumns: string[] = ['transaction', 'amount', 'date', 'name'];
  dataSource = ELEMENT_DATA;
}
