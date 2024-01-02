import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import emailjs from '@emailjs/browser';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/snackbar/snackbar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public isTabletPortrait = false;
  public isTabletLandscape = false;
  public isHandsetPortrait = false;
  public isHandsetLandscape = false;

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
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.isTabletLandscape = true;
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isHandsetPortrait = true;
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.isHandsetLandscape = true;
        }
      });
  }

  constructor(
    private _snackBar: MatSnackBar,
    private responsive: BreakpointObserver
  ) {}

  emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  scrollToComponent(component: string) {
    const element = document.getElementById(component);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async onSubmit(formDirective: FormGroupDirective) {
    const form = this.emailForm.value;
    const name = form.name!;

    emailjs.init('6bmhHNbsejSymRbrl');
    emailjs.send('service_1srs32e', 'template_jf8b3tj', form).then(
      () => {
        this.openSnackBar(name);
        this.emailForm.reset();
        formDirective.resetForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  openSnackBar(name: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: { name },
      panelClass: ['blue-snackbar'],
    });
  }
}
