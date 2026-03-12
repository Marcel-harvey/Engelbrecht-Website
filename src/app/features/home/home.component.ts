import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesPreviewComponent } from './components/services-preview/services-preview.component';
import { AboutPreviewComponent } from './components/about-preview/about-preview.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FaqComponent } from "./components/faq/faq.component";
import { LocationMapComponent } from "./components/location-map/location-map.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesPreviewComponent, AboutPreviewComponent, TestimonialsComponent, CallToActionComponent, FaqComponent, LocationMapComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}