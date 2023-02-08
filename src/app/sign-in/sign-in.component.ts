import { Component } from '@angular/core';
import { User } from './user.inteface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  public user!: User; // our model
  
  ngOnInit() { // we will initialize our form here
    this.user = {
    name: '',
    email:'',
    password:''
    };
    }
    save(model: User, isValid: boolean) 
    { 
    // check if model is valid// if valid, call API to save customer
    console.log(model, isValid);
    } 
}

