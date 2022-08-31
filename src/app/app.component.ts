import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  pages = [
    {
      link: 'home',
      name: 'Dashboard',
    },
    {
      link: 'events',
      name: 'Games',
    },
    {
      link: 'settings',
      name: 'Settings',
    }
  ]
}
