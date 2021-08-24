import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Server {
  readonly ROOT_URL = 'http://localhost:3000';
  readonly ITEMS_URL = 'http://localhost:3000/items';

  httpOptions={headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  itemBody: any | undefined;

  constructor(private http: HttpClient){}

  getCarouselData(): Observable<{}>{
    return this.http.get(this.ROOT_URL + '/carouselItems')
  }
  
  getAllItemsData(): Observable<{}>{
    return this.http.get(this.ITEMS_URL)
  }

  deleteItem(id:number){
    return this.http.delete((this.ITEMS_URL + `/${id}`), this.httpOptions).subscribe(()=> {
    })
  }
  
  getItem(id:number): Observable<{}>{
    return this.http.get(this.ITEMS_URL + `/${id}`)
  }

  editItem(id:number, itemBody: any) {
    return this.http.put<any>((this.ITEMS_URL + `/${id}`), itemBody).subscribe((data)=> {
    })
  }

  postItem(itemBody: Object) {
    return this.http.post<any>((this.ITEMS_URL), itemBody, this.httpOptions).subscribe((data) => {
    })
  }
}