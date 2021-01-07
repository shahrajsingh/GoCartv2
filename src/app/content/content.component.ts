import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Banner } from '../models/banner.model';
import { DoD } from '../models/Dealsoftheday.model';
import { Discount } from '../models/discount.model';
import { RecentProduct } from '../models/recentProduct.model';
import { ShopCategory } from '../models/shopCateogry.model';

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
  producbyCateogry = [
    {
      img:
        'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg',
      name: 'Electronics',
    },
    {
      img:
        'http://cdn.home-designing.com/wp-content/uploads/2020/01/blue-sofa.jpg',
      name: 'Home Decor',
    },
    {
      img:
        'https://builtin.com/sites/default/files/styles/thumbnail/public/2019-04/big-data-education.png',
      name: 'Education',
    },
    {
      img:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEVNYFX///9ufXQ+VEc7UkVCV0tJXVHf4uBGWk7b392Cjof6+/qVn5m0u7eep6Lp7OpYal97h4BoeG+rsq7o6uk1TT/O09Bicmm+xMBQY1jJzsvx8vGKlY65v7vW2tiutbEuRzmHkova3SwAAAAEK0lEQVR4nO2YYXuyIBSGPQJmNVtZmmXW9v//5IvNCqyuUe/c9ux67i9boMItAocTRX+bJP7pHgwNDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDf2LjdZKaZN4pUZ5uBWp++P+XalXcyrVWvsVR1LVduFWzb1OP2Co82olIq/buHBLa/HITyZ6JLNzR/SrTFxFPXZuKZ3XEpnpqbjez9KeSVJMStvedDxToY7hhklaiqyqrBmJjDeX3ppl1lJKfWj/NvO7hm6frOE+O/Hi1ljD6ljalNZ1Z9w+pHP7ivdNtp3KdOK+li8xTGsZrQtjTLEpZTp3KmyZ0S8yfmv/uXzCnxnOtOnwhsMa5upYrIoXkYUz8slapEp1V/Piyf+/oalkVHStFVvZa786tYa9ok8Nb39n1jA+fwaZjJyn6pU03QRRE5FNUMeDDdX00sVkLuKvGwMZtoN2uSqJRc7jVoxlGTQVw8fQaThKROZ+9TCGkXIbsm2MzmucyWQbNBOfM4y+y3DjfovpzGkjnY0OQRPxdxuqmawuT013Ul/2KbviBHX8VxtqO/Hcu+z0z8O3+o6fNFTJiV5D60K3zDOxW4pTpRqp1w+EM0cGNjxLFKsrw2xxInYVbUN1y6uNXVYLfzHRld3wd5vCPGA5rKEjUV8ZXtj3orZ9aRFZ5rq3J9nAcduGc9XOBEY0Qxt69A2X67xj3WtobYPrt7FURXRFolS8bN/OdhM4jsMaHvK4Y31jHppb0/DUULu9z/tD+NFle8J534vEYYo/OA8/WUv1Xkp984q2uWImEtbx37tbtBFbfnMQj7yt7j2gx+81jPR1fO9e9heiNrvBe/uIF8aYwx8wVJUTabdt7MbNWWpgw+85WySRfwC2kfdqwLOFPR8u3PNhr3qQuNRavDqD2G4gZ6kBzof+Gb+vM9AJWGTnXGUf4p7x51f33uKBTNQpT6N7eZojzxjezdOcDc1SauepSS7SmKHyNB+5tlFzaMZ+ru2DJwzLZcfBHafIuCuonRvuUKc2NJIyO2ynIu9fnmtrw97mmC+t4uttKsQwLF+aZNUlTk3fq4OrnxTvXb40+HjxBTnvrk5dfTRP5ryN+6C0bzJozhsTGuJDQ3xoiA8N8aEhPjTEh4b40BAfGuJDQ3xoiA8N8aEhPjTEh4b40BAfGuJDQ3xoiA8N8aEhPjTEh4b40BAfGuJDQ3xoiA8N8aEhPjTEh4b40BAfGuJDQ3xoiA8N8aEhPjTEh4b40BAfGuJDQ3xoiA8N8aEhPjTEh4b40BAfGuKTxP8AZyo498aYiSoAAAAASUVORK5CYII=',
      name: 'Others',
    },
  ];
  shopByDiscount: RecentProduct[] = [
    {
      img:
        'https://img.freepik.com/free-vector/3d-vector-shiny-red-discount-50-percent-off_66219-847.jpg?size=338&ext=jpg',
      name: '50%',
    },
    {
      img:
        'https://wp-krypton.s3.amazonaws.com/wp-content/uploads/sites/3/2019/12/30-865x460.jpg',
      name: '30%',
    },
    {
      img:
        'https://www.aplana.com/wp-content/uploads/2017/05/25_percent_off_sale_image_2.jpg',
      name: '25%',
    },
    {
      img: 'https://www.imtj.com/sites/default/files/asset/10percent.jpg',
      name: '10%',
    },
  ];
  recentProducts: RecentProduct[] = [
    {
      img:
        'https://media.wired.com/photos/5e9f574ed42e6f0008f47b7a/master/w_2560%2Cc_limit/Gear-Top-Apple_new-iphone-se-white_04152020.jpg',
      name: 'iPhone',
    },
    {
      img:
        'https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9-1024-80.jpg.webp',
      name: 'Laptop',
    },
    {
      img:
        'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg',
      name: 'Books',
    },
    {
      img:
        'https://images-na.ssl-images-amazon.com/images/I/41JNBqrm62L._AC_.jpg',
      name: 'Home Decor',
    },
  ];
  public slides = [
    {
      src: 'https://i.ytimg.com/vi/B3jyLmJS60M/maxresdefault.jpg',
    },
    {
      src:
        'https://static.vecteezy.com/system/resources/previews/000/364/312/non_2x/pay-per-click-banner-computer-with-money-vector-flat-illustration.jpg',
    },
    {
      src:
        'https://static.vecteezy.com/system/resources/previews/000/365/114/non_2x/keyword-targeting-banner-computer-with-text-and-icons-vector-flat-illustration.jpg',
    },
    {
      src:
        'https://www.chiefmarketer.com/wp-content/uploads/2020/09/37582-ems-2020-banners-ads-new_static_800x400.jpg',
    },
  ];
  isAuthenticated: boolean = false;
  DealsofTheDay: DoD[] = [
    {
      img:
        'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg',
      price: '80000',
      discountedPrice: '70426',
    },
    {
      img:
        'https://media.wired.com/photos/5e9f574ed42e6f0008f47b7a/master/w_2560%2Cc_limit/Gear-Top-Apple_new-iphone-se-white_04152020.jpg',
      price: '9000',
      discountedPrice: '8426',
    },
    {
      img:
        'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg',
      price: '9000',
      discountedPrice: '5426',
    },
    {
      img:
        'https://builtin.com/sites/default/files/styles/thumbnail/public/2019-04/big-data-education.png',
      price: '9000',
      discountedPrice: '8426',
    },
  ];
  bannerads: Banner[] = [];
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
