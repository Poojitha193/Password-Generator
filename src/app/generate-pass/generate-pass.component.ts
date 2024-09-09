import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-generate-pass',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './generate-pass.component.html',
  styleUrl: './generate-pass.component.css'
})
export class GeneratePassComponent {
  passwordLength: number = 12;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;
  generatedPassword: string = '';
  passwordStrength: number = 0;
  strengthClass: string = '';

  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '@#$&-_';
  
    let charSet = '';
    if (this.includeUppercase) charSet += uppercaseChars;
    if (this.includeLowercase) charSet += lowercaseChars;
    if (this.includeNumbers) charSet += numberChars;
    if (this.includeSymbols) charSet += symbolChars;
  
    this.generatedPassword = Array.from({ length: this.passwordLength })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');

      this.calculateStrength();
  }
  calculateStrength() {
    this.passwordStrength = 0;
    if (this.includeUppercase) this.passwordStrength++;
    if (this.includeLowercase) this.passwordStrength++;
    if (this.includeNumbers) this.passwordStrength++;
    if (this.includeSymbols) this.passwordStrength++;
    
    // Additional strength based on length
    if (this.generatedPassword.length >= 10) {
      this.passwordStrength++;
    }

    if (this.passwordStrength < 2) {
      this.strengthClass = 'weak';
    } else if (this.passwordStrength < 3) {
      this.strengthClass = 'average';
    } else if (this.passwordStrength < 4) {
      this.strengthClass = 'medium';
    } else {
      this.strengthClass = 'strong';
    }
}
}

