import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  colSize = 1;
  Products: Product[] = [
    {
      name: 'phone',
      price: 1234,
      description: 'luxry phone',
      sellerId: '1',
      sellerName: 'xzcv',
      image:
        'https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      id: 'zxvq231',
      category: 'electronics',
    },
    {
      name: 'phone',
      price: 796,
      description: 'luxry phone',
      sellerId: '1',
      sellerName: 'xzcv',
      image:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      id: 'zxvq231',
      category: 'electronics',
    },
    {
      name: 'XCXC',
      price: 7940,
      description: 'luxry phone',
      sellerId: '1',
      sellerName: 'xzcv',
      image:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      id: 'zxvq231',
      category: 'electronics',
    },
    {
      name: 'phone',
      price: 794,
      description: 'luxry phone',
      sellerId: '1',
      sellerName: 'xzcv',
      image:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      id: 'zxvq231',
      category: 'electronics',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
