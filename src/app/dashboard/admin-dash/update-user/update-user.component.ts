import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly apiService: ApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }
  public registerRequest: RegisterRequest =<RegisterRequest>{ };


   //user: User[]=[];
   user:any
  // userId = 5;
  isLoggedIn: boolean = false; // Oturum durumunu takip eden değişken
    currentUser: User | null = null; // Mevcut kullanıcı bilgilerini tutan değişken
    openPanel: boolean = false;
    ngOnInit() {

    }



    getUserDetail(Id: number) {
      this.apiService.getEntityById<User>(Id, User).then(
        (response: any) => {
          this.user = response.data;
          console.log(this.user);
         } )}
          //sonradan veri tabanına ekle
        //  const status = this.authService.addUser(this.registerRequest);
       // },

         // this.refresh();

    //    (error: any) => {
          // Handle error if necessary
      //    console.error(error);
     //   }
    //  );
   // }
   // getData() {
    //  return this.dataService.getData();

    //}
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

    //Update işlemini gerçekleştiren kod
    update(id: number, updatedUser: User) {
      return this.apiService.updateEntity(id, updatedUser, User);
    }
    /*editUsers(id: any) {
      this.apiService.getEntityById<user>(id, user).then((response) => {
        if (response && response.data) {
          //this.userEditDialog = true;
          this.UserToEdit = response.data; // API'den alınan aracı carToEdit değişkenine atıyoruz
          console.log(response.data);
        } else {
          console.error('Kullanıcı bulunamadı veya alınırken bir hata oluştu.');
        }
      }).catch((error) => {
        console.error('Kullanıcı alınırken bir hata oluştu:', error);
      });
    }
  */


  }





    /*this.route.paramMap.subscribe({
      next: (params)=> {
        const id= params.get('id');
  */
     /*   if(id){
          this.userService.getAllEntities(User)
          .subscribe({
            next: (response) =>{
              this.user? = response;
            }


      },
    //this.getUser();
    },);
  */
  //1.41
   /*getAllUser(){
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  };


     /* updateData(value: any) {
        let body = {
          name: value.UserName,
          age: value.UserSurname
        }

        this.dataservice.updateData(body, `622ca8c59f6c668226f74f52`)
          .subscribe(response => {
            console.log(response)
          })
      }
  */

