import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  colSize: number = 4;
  mobileQuery: MediaQueryList;
  tabQuery: MediaQueryList;
  mdpidesktop: MediaQueryList;
  desktopQuery: MediaQueryList;
  resizeObservable: Observable<Event>;
  resizeSubscription: Subscription;
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 686px)');
    this.tabQuery = media.matchMedia('(max-width: 1024px)');
    this.mdpidesktop = media.matchMedia('(max-width: 1366px');
    this.desktopQuery = media.matchMedia('(min-width: 1280px)');
  }

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.colSize = 1;
    } else if (this.tabQuery.matches) {
      this.colSize = 2;
    } else if (this.mdpidesktop.matches) {
      this.colSize = 3;
    } else {
      this.colSize = 4;
    }
    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable.subscribe((evt) => {
      if (window.innerWidth <= 686) {
        this.colSize = 1;
      } else if (window.innerWidth > 686 && window.innerWidth <= 1024) {
        this.colSize = 2;
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1366) {
        this.colSize = 3;
      } else {
        this.colSize = 4;
      }
    });
  }
}
