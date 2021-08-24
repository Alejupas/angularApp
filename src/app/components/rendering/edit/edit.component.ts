import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from 'src/app/service/server.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
@Input() item: any | undefined;


constructor(private server:Server, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getOneItem();
  }

  getOneItem(){
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.server.getItem(id).subscribe(item => {
      this.item = item;
    })
  }

  onDelete(id:number){
    this.server.deleteItem(id);
  }

  onEdit(id:number){
    const editedItem = {id: this.item.id, title: this.item.title, text: this.item.text, price: this.item.price, img: this.item.img}
    this.server.editItem(id, editedItem);
  }
}
