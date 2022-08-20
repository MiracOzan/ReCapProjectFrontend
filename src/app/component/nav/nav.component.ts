import { UserService } from './../../Services/user.service';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit {
  fullName: string;
  userId: number;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.controlAuthentication() == true) {
      this.fullName = this.getFullName();
      this.getUser();
    }
  }

  controlAuthentication(): boolean {
    return this.authService.isAuthenticated();
  }

  getFullName(): string {
    return JSON.stringify(localStorage.getItem('fullName'));
  }

  getUser(): number {
    this.userService.getUsers().subscribe((response) => {
      response.data.forEach((user) => {
        if (user.email == this.getFullName()) {
          this.userId = user.id;
        }
      });
    });
    return this.userId;
  }

  logout() {
    this.authService.logout();
    this.toastrService.success("Hesabınızdan Çıkışınız Başarıyla Sağlandı");
    this.router.navigate(['/home']);
  }
}
