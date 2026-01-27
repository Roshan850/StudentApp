import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  // fullName: string = '';
  // email: string = '';
  // phone: string = '';
  // password: string = '';
  // confirmPassword: string = '';
  // submitted: boolean = false;

  // onSubmit() {
  //   if (this.fullName && this.email && this.phone && this.password && this.confirmPassword) {
  //     if (this.password === this.confirmPassword) {
  //       this.submitted = true;
  //       alert('Registration successful!');
  //       this.resetForm();
  //     } else {
  //       alert('Passwords do not match!');
  //     }
  //   } else {
  //     alert('Please fill all fields!');
  //   }
  // }

  // resetForm() {
  //   this.fullName = '';
  //   this.email = '';
  //   this.phone = '';
  //   this.password = '';
  //   this.confirmPassword = '';
  // }
}
