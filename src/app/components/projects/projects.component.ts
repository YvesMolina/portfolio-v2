import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public cards = cards;
  public isTabletPortrait = false;
  public isTabletLandscape = false;
  public isHandsetPortrait = false;
  public isHandsetLandscape = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive
      .observe([
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;

        // Reset all breakpoints to false
        this.isTabletPortrait = false;
        this.isTabletLandscape = false;
        this.isHandsetPortrait = false;
        this.isHandsetLandscape = false;

        if (breakpoints[Breakpoints.TabletPortrait]) {
          this.isTabletPortrait = true;
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.isTabletLandscape = true;
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isHandsetPortrait = true;
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.isHandsetLandscape = true;
        }
      });
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.scrollToComponent('about');
    }
    if (event.deltaY > 0) {
      this.scrollToComponent('contact');
    }
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
