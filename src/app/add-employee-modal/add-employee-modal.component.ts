import { Component, EventEmitter, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CreateEmployee} from '../models/createEmployee';
import {EmployeeListComponent} from '../employee-list/employee-list.component';
import {EmployeeService} from '../services/employee.service';
//import { CreateEmployeeRequest } from '../models/create-employee-request';


@Component({
  selector: 'app-add-employee-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee-modal.component.html',
  styleUrl: './add-employee-modal.component.css'
})
export class AddEmployeeModalComponent {

  constructor(private employeeService: EmployeeService) { }

  name= '';
  department= '';

  @Output() employeeCreated = new EventEmitter<CreateEmployee>();
  @Output() cancelled = new EventEmitter<void>();

  save(): void {
    this.employeeCreated.emit({ name: this.name, department: this.department });
  }

  cancel(): void {
    this.cancelled.emit();
  }

}
