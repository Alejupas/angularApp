import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/service/server.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit {
  carouselItems: any;
  constructor(private server: Server) { }
  
  ngOnInit(): void {
    this.getCarouselItems()
  }
  getCarouselItems(): void {
    this.server.getCarouselData().subscribe(carouselItems => {
      this.carouselItems = carouselItems;
    })
  }
}

