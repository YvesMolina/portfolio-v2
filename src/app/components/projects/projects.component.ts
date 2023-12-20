import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public cards = cards;
  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.scrollToComponent('about');
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
