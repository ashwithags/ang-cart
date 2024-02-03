import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { CategoryService } from '../Service/category.service';
import { of } from 'rxjs';

const category = ['smartphone','watches'];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: CategoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CategoryService);
    fixture.detectChanges();
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toEqual('Categories');
  });

  // it('testing subscribe method called',()=>{
  //   //let prodSpy = spyOn(service, 'getCategories').and.returnValue(of(category));
  //  // let subSpy = spyOn(service.getCategories(),'subscribe');
  //   let prodSpy = spyOn(service, 'getCategories');
  //   tick();
  //  // expect(prodSpy).toHaveBeenCalledBefore(subSpy);
  //   //expect(subSpy).toX
  // HaveBeenCalled();
  //   expect(prodSpy).toHaveBeenCalled();


  // })

  it('should call noOnInit Method ',()=>{
    spyOn(component,'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  })
});
