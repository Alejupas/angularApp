import { Component, OnInit, Output } from '@angular/core';
import { Server } from 'src/app/service/server.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() postData: Object | any;
  title: string | any;
  text: string | any;
  img: string | any;
  price: number | any;


  constructor(private server: Server) { }

  ngOnInit(): void {
  }

  sendData(){
    const newItem = {
      title: this.title,
      text: this.text,
      img: this.img,
      price: this.price
    }
    this.server.postItem(newItem);
  }
}
