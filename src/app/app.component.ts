import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratePassComponent } from './generate-pass/generate-pass.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GeneratePassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
