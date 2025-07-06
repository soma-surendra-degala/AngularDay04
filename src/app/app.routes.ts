import { Routes } from '@angular/router';
import { Reactiveform } from './reactiveform/reactiveform';
import { Templatedrive } from './templatedrive/templatedrive';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'templatedrive', component: Templatedrive },
  { path: 'reactiveform', component: Reactiveform }
];
