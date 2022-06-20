import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesDataModule } from '../app/employees-data/employees-data.module';

const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () => import('../app/employees-data/employees-data.module').then(x => x.EmployeesDataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
