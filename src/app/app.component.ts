import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public slides = [
    {
      src:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
  ];
  title = 'GoCart';
}
