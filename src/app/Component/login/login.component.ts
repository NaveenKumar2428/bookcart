import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  name: string = 'NaveenKumar@gmail.com';
  password:string = 'ksdgfsdhfhf@123';

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(private auth: AuthService, private router: Router) { }

  // this ngoninit do that user can not go back to login page untill they logout

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']); 
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
