import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http'
import { ProductsService } from './products.service';
import {environment} from './../../../../environments/environment'
describe('ProductoService', () => {
  let service: ProductsService;
  let  httpClient :HttpClient;
  let httpTestingController : HttpTestingController;
  beforeEach( () => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
   
   // service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
     expect(service).toBeTruthy();
  });
  describe('tests for getAllProducts',()=>{
    it ('should return products',()=>{
      const expecData =[
        {
          id: 1 ,
          title:'dalalla', 
          price:'1100',
          description: 'hola',
          image: 'image/img.jpg'
        },
        {
          id: 2 ,
          title:'lalalla', 
          price:'9000',
          description: 'holahola',
          image: 'image/imge.jpg'
        }
      ];
      let dataError, dataResponse;
        service.getAllProducts()
        .subscribe(response =>{
          dataResponse = response;
        }, error=>{
          dataError = error;
        })
        const req = httpTestingController.expectOne(`${environment.url_api}/products`)
       req.flush(expecData)
       expect(dataResponse.length).toEqual(2);
       expect(req.request.method).toEqual('GET');
       expect(dataError).toBeUndefined();
      })
  });
})
