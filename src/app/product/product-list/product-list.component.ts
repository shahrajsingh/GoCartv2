import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  colSize = 5;
  mobileQuery: MediaQueryList;
  tabQuery: MediaQueryList;
  mdpidesktop: MediaQueryList;
  desktopQuery: MediaQueryList;
  resizeObservable: Observable<Event>;
  resizeSubscription: Subscription;
  Products: Product[] = [
    {
      name: 'Product 1',
      category: 'electronics',
      price: 1000,
      sellerName: 'shahraj',
      id: '123',
      sellerId: '123',
      description: 'iphiine',
      image:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      rating: 4.5,
    },
    {
      name: 'Product 2',
      category: 'electronics',
      price: 1000,
      sellerName: 'singh',
      id: '124',
      sellerId: '122',
      description: 'basdea',
      image:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      rating: 4.5,
    },
    {
      name: 'Product 3',
      category: 'electronics',
      price: 1000,
      sellerName: 'singh',
      id: '124',
      sellerId: '122',
      description: 'basdea',
      image:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      rating: 4.5,
    },
    {
      name: 'Product 4',
      category: 'electronics',
      price: 1000,
      sellerName: 'singh',
      id: '124',
      sellerId: '122',
      description: 'basdea',
      image:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      rating: 4.5,
    },
  ];
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 686px)');
    this.tabQuery = media.matchMedia('(max-width: 1024px)');
    this.mdpidesktop = media.matchMedia('(max-width: 1366px');
    this.desktopQuery = media.matchMedia('(min-width: 1280px)');
  }

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.colSize = 2;
    } else if (this.tabQuery.matches) {
      this.colSize = 3;
    } else if (this.mdpidesktop.matches) {
      this.colSize = 4;
    } else {
      this.colSize = 5;
    }
    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable.subscribe((evt) => {
      if (window.innerWidth <= 686) {
        this.colSize = 2;
      } else if (window.innerWidth > 686 && window.innerWidth <= 1024) {
        this.colSize = 3;
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1366) {
        this.colSize = 4;
      } else {
        this.colSize = 5;
      }
    });
  }
}
