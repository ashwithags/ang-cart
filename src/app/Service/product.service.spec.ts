import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httptesttoControl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httptesttoControl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return the product list data', (done) => {
    const dummyProductList = ["smartphones", "laptops", "fragrances"];
    service.getProductList().subscribe((data) => {
      expect(dummyProductList).toEqual(data);
      done();
    })

    const req = httptesttoControl.expectOne(service.ProductUrl + '?limit=0');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(dummyProductList);
    httptesttoControl.verify();
  })
});
