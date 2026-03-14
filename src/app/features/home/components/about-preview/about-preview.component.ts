import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-preview.component.html',
  styleUrls: ['./about-preview.component.css']
})
export class AboutPreviewComponent {}