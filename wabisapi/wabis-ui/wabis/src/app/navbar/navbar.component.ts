import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faHome = faHome

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }

}