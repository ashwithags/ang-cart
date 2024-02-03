import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  let httptesttoControl: HttpTestingController;
  let jsonUrl = 'https://dummyjson.com/products/categories';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoryService);
    httptesttoControl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the method once', () => {
    spyOn(service, 'getCategories').and.callThrough();
    expect(service.getCategories).toHaveBeenCalledTimes(0);
  })

  it('should return the data', (done) => {
    const dummyCategory = ["smartphones"];
    service.getCategories().subscribe((data) => {
      expect(dummyCategory).toEqual(data);
      done();
    })

    const req = httptesttoControl.expectOne(service.jsonUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(dummyCategory);
    httptesttoControl.verify();
  })


  it('should call Handel error on error', () => {
    service.getCategories().subscribe(() => {
      fail('should have failed with error 404'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toContain('404 error');
        }
    })
    const req = httptesttoControl.expectOne(service.jsonUrl);
    req.flush('404 error', { status: 404, statusText: 'Not Found' }); // Respond with mock error

  })


})