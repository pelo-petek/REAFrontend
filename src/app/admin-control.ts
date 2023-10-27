import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, map, take } from "rxjs";
import { AuthService } from "src/core/services/auth/auth.service";


@Injectable({
  providedIn: 'root',
})
export class adminControl implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // AuthService içindeki currentUser$ gözlemi ile kullanıcı bilgilerini kontrol edin.
    this.authService.currentUser.subscribe((user) => {
      console.log(user)
      if (user?.userType==0) {
        // Kullanıcı oturum açmışsa, rotaya erişim izni verin.
        return true;
      } else if (user?.userType == 1) {
        // Kullanıcı oturum açmamışsa veya oturumu kapatmışsa, başka bir yere yönlendirin veya giriş sayfasına gönderin.
        this.router.navigate(['/user']);
        return false;
      }
      return false;
    });

    return true; // Önceki abonelik tamamlanana kadar true döndürün.
  }
}



@Injectable({
  providedIn: 'root',
})
export class userControl implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // AuthService içindeki currentUser$ gözlemi ile kullanıcı bilgilerini kontrol edin.
    this.authService.currentUser.subscribe((user) => {
      console.log(user)
      if (user?.userType==1) {
        // Kullanıcı oturum açmışsa, rotaya erişim izni verin.
        return true;
      } else if (user?.userType == 0) {
        // Kullanıcı oturum açmamışsa veya oturumu kapatmışsa, başka bir yere yönlendirin veya giriş sayfasına gönderin.
        this.router.navigate(['/admin']);
        return false;
      }
      return false;
    });

    return true; // Önceki abonelik tamamlanana kadar true döndürün.
  }
}
