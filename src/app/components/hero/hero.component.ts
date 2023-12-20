import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ScrollSpyModule, ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ScrollSpyModule],
  providers: [ScrollSpyService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  activeTarget: string = '';
  @Output() activeTargetChange = new EventEmitter<string>();

  constructor(private spyService: ScrollSpyService) {}

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

  ngAfterViewInit() {
    this.spyService.spy({ thresholdBottom: 50 });
  }

  setActiveTarget(targetName: string) {
    this.activeTarget = targetName;
    console.log('%c⧭', 'color: #00b300', "test");
  }
}
