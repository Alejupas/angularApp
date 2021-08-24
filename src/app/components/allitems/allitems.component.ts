import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.scss']
})
export class AllitemsComponent implements OnInit {
  title = "All items";
  constructor() { }

  ngOnInit(): void {
  }

}
