import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Engine } from 'tsparticles-engine';
import { MoveDirection, ClickMode, HoverMode, OutMode } from "tsparticles-engine";
//import { loadFull } from "tsparticles";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-v2';
  
}