import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllUserService, Updatedata} from '../../service/all-user.service';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { updateUser } from '../../store/entities/users/users.actions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.scss'
})


export class UpdateuserComponent {

  
formData = new FormGroup({
  username: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
});
  registrationError?: string;


constructor(
  private alluser: AllUserService,
  private apollo: Apollo,
  private store:Store<AppState>
  ){}
onSubmit() {

  if (!this.formData.valid) {
    this.registrationError = 'Please fill in all fields correctly.';
    this.showFailure();
    return; }

    let registerData:Updatedata = {
      username : this.formData.value.username as string,
      email : this.formData.value.email as string,
     }
 console.log('data submitted',this.formData);
 this.store.dispatch(updateUser({input:{
  id:"",
  username: this.formData.value.username!,
  email: this.formData.value.email!,
 }}));
    //  this.alluser.update(registerData);

 }
  showFailure() {
    throw new Error('Method not implemented.');
  }


//   application(userData: ApplicationData){
//     this.apollo.mutate({
//       mutation:CreateApplicationMutation,
//       variables:{
//         input: userData
//       }
//     }).subscribe({
//       next: (result) => {
//         console.log('Registration successful:', result);
//         this.toastr.success('Registration successful');
//         this.router.navigate(['/userhome']);
//         // handle successful registration, e.g., redirect to login
//       },
//       error: (error) => {
//         console.error('Registration error:', error);
//         this.showFailure(error)
//       }
//     });
//   }
}