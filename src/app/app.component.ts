import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MyHeaderComponent,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'prim_lek7_pszzd_v1';
}
