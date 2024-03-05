import { Routes } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

export const routes: Routes = [
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
];
