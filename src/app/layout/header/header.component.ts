import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('0.5s 0.1s ease-in-out')]),
      transition(':leave', [
        animate('0.5s 0.1s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
    trigger('fadeIn2', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('0.5s 0.2s ease-in-out')]),
    ]),
    trigger('fadeIn3', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('0.5s 0.3s ease-in-out')]),
    ]),
    trigger('fadeIn4', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('0.5s 0.4s ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent {
  public isTabletPortrait = false;
  public isTabletLandscape = false;
  public isHandsetPortrait = false;
  public isHandsetLandscape = false;
  public isBackgroundVisible = false;
  public menuToggled = false;

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

        this.isTabletPortrait = false;
        this.isTabletLandscape = false;
        this.isHandsetPortrait = false;
        this.isHandsetLandscape = false;

        if (breakpoints[Breakpoints.TabletPortrait]) {
          this.isTabletPortrait = true;
          console.log('%c⧭', 'color: #1d5673', 'this.isTabletPortrait');
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.isTabletLandscape = true;
          console.log('%c⧭', 'color: #f200e2', 'this.isTabletLandscape');
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isHandsetPortrait = true;
          console.log('%c⧭', 'color: #731d1d', 'this.isHandsetPortrait');
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.isHandsetLandscape = true;
          console.log('%c⧭', 'color: #807160', 'this.isHandsetLandscape');
        }
      });
  }
  currentSection = '';
  scrollToComponent(component: string) {
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isBackgroundVisible = component !== 'hero' ? true : false;
    }
  }

  toggleMenu(open?: string) {
    if (open === 'close') {
      this.menuToggled = false;
    } else {
      this.menuToggled = !this.menuToggled;
    }
  }
}
