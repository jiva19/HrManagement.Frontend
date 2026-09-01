import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../models/login-request';
import {Observable, tap} from 'rxjs';
import {LoginResponse} from '../models/login-response';
import {Employee} from '../models/employee';
import {Injectable} from '@angular/core';
import {CreateEmployee} from '../models/createEmployee';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private readonly baseUrl = 'http://localhost:5074/api/Employee';

  constructor(private http: HttpClient) { }

  getEmployees(name?: string, department?: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}?name=${name ?? ''}&department=${department ?? ''}`);
  }

  createEmployee(employee: CreateEmployee): Observable<void> {
    return this.http.post<void>(this.baseUrl, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }





}
