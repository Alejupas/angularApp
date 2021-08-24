import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Server } from './server.service';
import { of } from 'rxjs';

describe('Backend ItemService', () => {
  let service: Server;
  let httpMock: HttpTestingController;

const postItem = [
  {
    "id": 2,
    "title": "New Naik collection",
    "text": "They were sold out in few days! But we have some spare left.",
    "price": "20.99",
    "img": "https://m.media-amazon.com/images/I/414nzlV-wvL.jpg"
  },
  {
    "id": 4,
    "title": "UK mainland division",
    "text": "7Eleven",
    "price": "7.11",
    "img": "http://familywealthadvisory.com/wordpress/wp-content/uploads/2017/10/Plane-200x200.png"
  },
  {
    "id": 6,
    "title": "Flight",
    "text": "7Eleven",
    "price": "7.11",
    "img": "http://familywealthadvisory.com/wordpress/wp-content/uploads/2017/10/Plane-200x200.png"
  },
  {
    "id": 7,
    "title": "Apples 1kg",
    "text": "Skanus lietuviski obuoliai is Jono ukio Silaleje",
    "price": 1.89,
    "img": "http://www.flinchbaughsorchard.com/wp-content/uploads/2014/02/pink-lady-apple.jpg"
  },
  {
    "id": 9,
    "title": "Basketball Tarmak Defenders",
    "text": "Specialus, kokybiskas ir geras.",
    "price": 5.99,
    "img": "https://contents.mediadecathlon.com/p1914256/k$972494cb93e4cea0cea5663af983c5fe/men-s-size-7-ages-13-and-up-beginner-basketball-red.jpg?&f=200x200"
  }
];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });

    service = TestBed.inject(Server);
    httpMock = TestBed.inject(HttpTestingController);
  });

    // CAROUSEL TESTING

  it(`should fetch Carousel posts with length to be 3`, (inject([HttpTestingController, Server],
    (httpClient: HttpTestingController, service: Server) => {

      const postItem = [
        {
          "id": 1,
          "text": "Leather Jacket",
          "img": "https://cdn.shopify.com/s/files/1/0228/0911/6708/articles/leather-1.jpg?v=1572299598"
        },
        {
          "id": 2,
          "text": "Summer hat",
          "img": "https://st3.depositphotos.com/1092937/12928/i/950/depositphotos_129288056-stock-photo-handmade-weaved-straw-pattern.jpg"
        },
        {
          "id": 3,
          "text": "Nice T-Shirt",
          "img": "https://previews.123rf.com/images/mangpor2004/mangpor20041804/mangpor2004180400048/99992769-wrinkled-white-cotton-fabric-textured-background-fashion-pattern-textile-design-concept-background.jpg"
        }
      ];


      service.getCarouselData()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      let req = httpMock.expectOne('http://localhost:3000/carouselItems');
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));

    // THUMBNAILS TESTING
    it(`should fetch posts from Thumbnails Api as a length of 5`, (inject([HttpTestingController, Server],
      (httpClient: HttpTestingController, service: Server) => {
  
        service.getAllItemsData()
          .subscribe((posts: any) => {
            expect(posts.length).toBe(5);
          });
  
        let req = httpMock.expectOne('http://localhost:3000/items');
        expect(req.request.method).toBe("GET");
  
        req.flush(postItem);
        httpMock.verify();
      })));

      it(`should add one more Thumbnail item so the total length should be 6`, (inject([HttpTestingController, Server],
        (httpClient: HttpTestingController, service: Server) => {
    
          service.getAllItemsData()
            .subscribe((posts: any) => {
              expect(posts.length).toBe(6);
            });
    
          let req = httpMock.expectOne('http://localhost:3000/items');
          expect(req.request.method).toBe("POST");
    
          req.flush(postItem);
          httpMock.verify();
        })));

        it('should get a value of ', ()=> {
          let allItems = [];
        service.getAllItemsData().subscribe((items: any)=> allItems = items)
        // expect('itemsList to be length of ').toBe()
        })
})
