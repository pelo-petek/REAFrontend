import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent {
  public registerRequest: RegisterRequest =<RegisterRequest>{};

constructor(
  private readonly authService: AuthService,
  private readonly router: Router,
  private messageService: MessageService,
) { }

ngOnInit() {
  // Sayfa yüklendiğinde, rastgele bir internet resmi URL'sini alın ve registerRequest.UserPhoto'ya atayın


}
async getRandomImageURL(): Promise<string | null> {
  // Lorem Picsum servisinden rastgele bir resim URL'si almak
  const response = await fetch('https://picsum.photos/200/300');
  if (response.ok) {
    const imageURL = response.url;
    return imageURL;
  } else {
    return null; // Resim alınamazsa null döner
  }
}


async register() {
  let status = await this.authService.register(this.registerRequest);
  if (status == ResponseStatus.Ok) {
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarılı bir şekilde eklendi', life: 3000 });
    setTimeout(async () => {
      await this.router.navigate(['./login']);
    }, 2300);
  } else if (status == ResponseStatus.Invalid){
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Kullanıcı oluşturulamadı' });
  this.registerRequest.password = '';
  }

}
}
