import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollSpyModule, ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ScrollSpyModule,
  ],
  providers: [ScrollSpyService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  @Output() activeTargetChange = new EventEmitter<string>();
  
  title = 'scroll-spy';
  activeTarget: string = '';

  constructor(private spyService: ScrollSpyService) {}
  ngAfterViewInit() {
    this.spyService.spy({ thresholdBottom: 50 });
  }

  setActiveTarget(targetName: string) {
    this.activeTarget = targetName;
  }

  changeActiveTarget(event: any) {
    console.log('%c⧭', 'color: #ffa640', event);
    this.activeTarget = event;
  }
}
