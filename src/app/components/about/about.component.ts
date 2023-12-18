import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const cards = [
  {
    url: 'https://i.ibb.co/W3vvBMZ/broad-img.png',
    title: 'Broadconstruction',
    shortProjectUrl: 'broadconstruction.com',
    projectUrl: 'https://broadconstruction-demo.netlify.app/',
    alt: 'Image of a shiba inu',
  },
  {
    url: 'https://i.ibb.co/W3vvBMZ/broad-img.png',
    title: 'Image 2',
    projectUrl: 'https://angular.io',
    alt: 'Image of a shiba inu',
  },
  {
    url: 'https://i.ibb.co/W3vvBMZ/broad-img.png',
    title: 'Image 3',
    projectUrl: 'https://angular.io',
    alt: 'Image of a shiba inu',
  },
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public cards = cards;
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.scrollToComponent('hero');
    }
    // if (event.deltaY > 0) {
    //   this.scrollToComponent('projects');
    // }
  }

  scrollToComponent(component: string) {
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
