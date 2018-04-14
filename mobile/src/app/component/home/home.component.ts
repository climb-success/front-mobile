import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {

  slides: any[];
  constructor(
    config: NgbCarouselConfig
  ) { 
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
    this.slides = [
      {
        id: 'ngb-slide-1',
        img: {
          url: '../assets/image/home/banner_1.jpg',
          title: 'Random first slide'
        },
        description: {
          title: 'First slide label',
          detail: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }
      },
      {
        id: 'ngb-slide-2',
        img: {
          url: '../assets/image/home/banner_2.jpg',
          title: 'Random second slide'
        },
        description: {
          title: 'Second slide label',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      },
      {
        id: 'ngb-slide-3',
        img: {
          url: '../assets/image/home/banner_3.jpg',
          title: 'Random third slide'
        },
        description: {
          title: 'Third slide label',
          detail: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        }
      }
    ];
  }

  
}
