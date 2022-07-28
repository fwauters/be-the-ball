import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    }
  ]
}
