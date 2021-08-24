import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/service/server.service';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {
  thumbnailsItems: any;
  constructor(private server:Server) { }

  ngOnInit(): void {
    this.getThumbnailsItems();
  }

  getThumbnailsItems(){
    this.server.getAllItemsData().subscribe(thumbnailsItems => {
      this.thumbnailsItems = thumbnailsItems;
    })
  }
}
