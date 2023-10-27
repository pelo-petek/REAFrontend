import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [MessageService]

})
export class AddUserComponent {


  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService,
  ) { }

  public registerRequest: RegisterRequest =<RegisterRequest>{};
  ngOnInit() {
  }


  async addUser() {
    const status = await this.authService.addUser(this.registerRequest);

    if (status === ResponseStatus.Ok) {
      this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarılı bir şekilde eklendi', life: 3000 });
    setTimeout(async () => {
      await this.router.navigate(['/allUsers']);
    }, 2300);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Kullanıcı oluşturulamadı.', life: 3000 });
    }
  }
}
