import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesDataRoutingModule } from './employees-data-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientInMemoryWebApiModule
  ]
})
export class EmployeesDataModule { }
