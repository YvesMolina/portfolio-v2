import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [],
})
export class AboutComponent {
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
          console.log('%c⧭', 'color: #1d5673', "this.isTabletPortrait");
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.isTabletLandscape = true;
          console.log('%c⧭', 'color: #f200e2', "this.isTabletLandscape");
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isHandsetPortrait = true;
          console.log('%c⧭', 'color: #731d1d', "this.isHandsetPortrait");
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.isHandsetLandscape = true;
          console.log('%c⧭', 'color: #807160', "this.isHandsetLandscape");
        }
      });
  }

  scrollToComponent(component: string) {
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
