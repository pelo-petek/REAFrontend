import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  id!:any;

  constructor(
   private readonly authService: AuthService,
   private readonly router: Router,
   private readonly apiService: ApiService,
 ) { }


 delete(id: number) {
  console.log(this.id + "deleted succesfully");
  this.id=0;
   return this.apiService.deleteEntity(id, User);

 }



}
