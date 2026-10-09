import { Component, input, output, signal } from '@angular/core';
import { RegisterCreds, User } from '../../../types/user';
import { FormsModule } from '@angular/forms';
import { TmplAstHostElement } from '@angular/compiler';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  membersFromHome = input.required<User[]>();
  cancelRegister = output<boolean>();
  protected creds = {} as RegisterCreds;

  register() {
    console.log((this.creds));
  }

  cancel() {
    this.cancelRegister.emit(false); 
  }
}
