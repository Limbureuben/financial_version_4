import { Component } from '@angular/core';
import { AllUserService} from '../../service/all-user.service';
import { Store } from '@ngrx/store';
import { GetDashboardData } from '../../store/entities/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { Dashboard } from '../../store/entities/dashboard/dashboard.model';
import { selectDashboardDatas, selectModifiedDashboardDatas } from '../../store/entities/dashboard/dashboard.selectors';
import {AppState} from '../../store/reducers';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  username = '';
  email = '';
  users: any[] = [];
  error: any;
  currentUser: any;
  userId: string|any;
  isEditModalOpen = true;
  dashboardData$!:Observable<Dashboard[]>;

  loading: boolean = true;

constructor(
  private allUser: AllUserService,
  private store:Store<AppState>,
  public dialog: MatDialog
) {};

openEditDialog(user: any): void {
  const dialogRef = this.dialog.open(EditUserDialogComponent, {
    width: '400px', height: '400px',
    data: { username: user.username, email: user.email }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Handle the result from the dialog (e.g., send updated user to backend)
      console.log('User data updated:', result);
    }
  });
}

deleteRegistration(registerId: number) {
  // Handle user deletion
}


ngOnInit(): void {
  this.store.dispatch(GetDashboardData());

  this.dashboardData$ = this.store.select(selectModifiedDashboardDatas);
   
}

openEditModal(userId: string) {
  // this.allUser.getAllUsers(userId).subscribe(data=> {
  //   this.currentUser = data;
  //   this.username=data.username;
  //   this.email=data.email;
  // })
  // this.isEditModalOpen = true;
  // this.userId=userId;
}


ConfirmEditUser() {
  // console.log("submit");
  // if(this.username==''||this.email==''){

  // const userData = {
  //   email: this.email,
  //   username: this.username
  // };
  // console.log(userData);
  //   console.log("error");
  //   return
  // }
  // const userData = {
  //   email: this.email,
  //   username: this.username
  // };
  // this.allUser.editUser(this.userId, userData).subscribe(response=>{
  //   window.location.reload();
  // })
  // }


}

}
