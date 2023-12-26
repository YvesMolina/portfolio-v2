import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  providers: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
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

  activeTarget: string = '';
  @Output() activeTargetChange = new EventEmitter<string>();

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.scrollToComponent('about');
    }
  }

  scrollToComponent(component: string) {
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
