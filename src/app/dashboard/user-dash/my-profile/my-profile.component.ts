import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BaseDataResponse } from 'src/core/models/response/base-data-response.model';
import { User } from 'src/core/models/user.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  constructor(private readonly authService: AuthService, private readonly apiService: ApiService,
    private readonly httpClient: HttpClient ){}

  userDetail: User[]=[];
  ngOnInit() {
   // this.getUser();
    //this.getUserDetail(1) ;
    this.getUserInfo(1)
  }
  getUser() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.userDetail = response.data;
      console.log(this.userDetail);
    });
  }

  private endpoint = environment.api_url;
  getUserInfo(Id: number): Observable<BaseDataResponse<User>> {
    return this.httpClient
      .get<BaseDataResponse<User>>(`${this.endpoint}/User/GetById?Id=${Id}`)
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getUserDetail(Id: any) {
    this.apiService.getEntityById<User>(Id, User).then(
      (response: any) => {
        this.userDetail = response.data;
        console.log(this.userDetail);
 console.log("heyyyy its me ")
      },

       // this.refresh();

      (error: any) => {
        // Handle error if necessary
        console.error(error);
      }
    );
  }


}
