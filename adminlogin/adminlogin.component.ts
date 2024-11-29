import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService, AdminData } from '../../service/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.scss'
})
export class AdminloginComponent {

  formDetails = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

   username: string = '';
   password: string = '';

  constructor(private authService: AuthService) {}
    onSubmit() {
      if(!this.formDetails.valid) {
        return;
      }

      let adminData: AdminData = {
        password: this.formDetails.value.password as string,
        username: this.formDetails.value.username as string
      }
       this.authService.loginadmin(adminData);
    }
}
