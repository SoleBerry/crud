import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesDataModule } from './employees-data/employees-data.module';
import { EmployeesDataComponent } from './employees-data/employees-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


const routes: Routes = [

  {
    path: 'employees',
    loadChildren: () => import('../app/employees-data/employees-data.module').then(x => x.EmployeesDataModule)
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeesDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule,
    // 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
