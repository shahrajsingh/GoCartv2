import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GoCart';
  recentProducts = [
    {
      img: 'https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      name: 'wwerw',
    },
    {
      img: 'https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      name: 'wwerw',
    },
    {
      img: 'https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      name: 'wwerw',
    },
    {
      img: 'https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      name: 'wwerw',
    },
  ];
}
