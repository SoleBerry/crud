import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  // data = this.employeeService.getItems();

  // registerForm = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   userName: new FormControl('', Validators.required),
  //   title: new FormControl('', Validators.required),
  //   confirmpassword: new FormControl('', Validators.required),
  //   gender: new FormControl('', Validators.required),
  //   acceptTerms: new FormControl('',Validators.required)
  // });

  isSuccessful = false;
  errorMessage = '';

  registerForm: any = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])],
    userName: ['',Validators.required],
    title: ['',Validators.required],
    confirmpassword: ['',[Validators.required,Validators.minLength(8)]],
    gender: ['', Validators.required],
    acceptTerms:['',Validators.required]
  })

  constructor(private fb: FormBuilder,private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { title, firstName, lastName, userName, email, password, confirmpassword, gender } = this.registerForm;
    this.employeeService.register(title, firstName, lastName, userName, email, password, confirmpassword, gender).subscribe({
      next: data => {
        console.log("data",data);
        this.isSuccessful = true
      }
    })
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  get f(){
    return this.registerForm.controls;
  }
  


}

