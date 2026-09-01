import { Component } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CreateEmployee} from '../models/createEmployee';
import {AddEmployeeModalComponent} from '../add-employee-modal/add-employee-modal.component';
import {ConfirmDeleteModalComponent} from '../confirm-delete-modal/confirm-delete-modal.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employee-list',
  standalone : true ,
  imports: [CommonModule, FormsModule,AddEmployeeModalComponent,ConfirmDeleteModalComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: Employee[] = [];
  searchName = '';
  searchDepartment = '';
  showAddModal = false;
  showDeleteModal = false;
  pendingDeleteId: number | null = null;


  constructor(private employeeService: EmployeeService, private authService: AuthService,private router: Router) { }


  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(name?:string, department?:string): void {
    this.employeeService.getEmployees(name,department).subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error('Failed to load employees', err)
    });
  }



  deleteEmployee(id:number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      {
        next: () => {
          this.employees = this.employees.filter(e => e.id !== id);
        },
        error: (err) => console.error('Failed to delete', err)
      }
    );
  }

  onEmployeeCreated(request: CreateEmployee): void {
    this.employeeService.createEmployee(request).subscribe({
      next: () => {
        this.showAddModal = false;
        this.loadEmployees(this.searchName, this.searchDepartment);
      },
      error: (err) => console.error('Failed to create employee', err)
    });
  }

  confirmDelete(id: number): void {
    this.pendingDeleteId = id;
  }

  onDeleteConfirmed(): void {
    if (this.pendingDeleteId !== null) {
      this.deleteEmployee(this.pendingDeleteId);
    }
    this.pendingDeleteId = null;
  }

  onDeleteCancelled(): void {
    this.pendingDeleteId = null;
  }

  onCancel(): void {
    this.showAddModal = false;

  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
