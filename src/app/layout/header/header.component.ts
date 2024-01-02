import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const scrollThreshold = 200;
    if (!this.isTabletPortrait && !this.isHandsetPortrait) {
      this.isBackgroundVisible = scrollPosition > scrollThreshold;
    }
  }

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
          this.isBackgroundVisible = true;
          this.isTabletPortrait = true;
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.isTabletLandscape = true;
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isBackgroundVisible = true;
          this.isHandsetPortrait = true;
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.isHandsetLandscape = true;
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
