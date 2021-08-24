import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Server } from '../../../service/server.service';
import { EditComponent } from './edit.component';


  describe('EditComponent', () => {
    let postService: Server;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        providers: [
          Server
        ],
      });
  
      postService = TestBed.get(Server);
      httpMock = TestBed.get(HttpTestingController);
    });
  
    it(`should send put(edit) request`, (inject([HttpTestingController, Server],
      (httpClient: HttpTestingController, postService: Server) => {
  
          
        let req = httpMock.expectOne('http://localhost:3000/items');
        expect(req.request.method).toBe("PUT");
  
        httpMock.verify();
      })));
  });