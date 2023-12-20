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
    url: 'https://i.ibb.co/9ypK5Wk/broad.png',
    title: 'Broadconstruction',
    shortProjectUrl: 'broadconstruction.co.uk',
    projectUrl: 'https://broadconstruction-demo.netlify.app/',
    alt: 'image of broad construction logo',
  },
  {
    url: 'https://i.ibb.co/1RMvFPN/kolth.png',
    title: 'Kolth Technologies',
    shortProjectUrl: 'kolthtechnologies.fr',
    projectUrl: 'https://kolthtechnologies.fr/',
    alt: 'image of kolth technologies logo',
  },
  {
    url: 'https://i.ibb.co/FJkRzcm/hbf.png',
    title: 'HBF Group App',
    shortProjectUrl: 'groupehbf.com',
    projectUrl: 'https://groupehbf.com/',
    alt: 'image of hbf group logo',
  },
];
