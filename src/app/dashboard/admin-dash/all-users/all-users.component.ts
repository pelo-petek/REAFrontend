import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ApiService } from 'src/core/services/api/api.service';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  constructor(private readonly authService: AuthService, private readonly apiService: ApiService,
    private readonly httpClient: HttpClient ){}

  userDetail: User[]=[];
  ngOnInit() {
    this.getUser();
    this.userDetail ;
  }
  getUser() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.userDetail = response.data;
      console.log(this.userDetail);
    });
  }

  getUserDetail(Id: any) {
    this.apiService.getEntityById<User>(Id, User).then(
      (response: any) => {
        this.userDetail = response.data;
        console.log(this.userDetail);

      },

       // this.refresh();

      (error: any) => {
        // Handle error if necessary
        console.error(error);
      }
    );
  }


      UserToEdit: User | null = null;
  onUpdate(id: any, updatedUser: User) {
    this.update(id, updatedUser).then(response => {
      if (response?.status == ResponseStatus.Ok) {
      //  this.refresh();
      //  this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı güncelleme başarılı', life: 3000 });
      //  this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
         console.log("updated succesfully");
    }
    }).catch((error) => {
      console.error('Kullanıcı güncellenirken bir hata oluştu:', error);
    });
  }
  update(id: number, updatedUser: User) {
    return this.apiService.updateEntity(id, updatedUser, User);
  }

}
