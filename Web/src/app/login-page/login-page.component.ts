import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isModalOpen: boolean = false; // Rename this to isOpen

  constructor() { }

  ngOnInit(): void { }

  openModal() {
    this.isModalOpen = true; // Rename this to isOpen
  }

}
