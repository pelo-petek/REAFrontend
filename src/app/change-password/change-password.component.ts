import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/core/models/request/login-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [MessageService]

})
export class ChangePasswordComponent {
  public loginRequest: LoginRequest = <LoginRequest>{};

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService,
  ) { }




  async login() {

    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Başarıyla giriş yaptınız!', life: 3000 });
      await this.router.navigate(['/home']); // Burada yönlendirmeyi uygun bir sayfa yoluna göre güncelleyin
    } else if (status == ResponseStatus.Invalid) {
      this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'E-posta veya şifre hatalı' });
      this.loginRequest.password = '';
    }
  }
  ngOnInit() {
    this.login();
}
}
