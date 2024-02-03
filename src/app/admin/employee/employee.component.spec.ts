import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeComponent } from './employee.component';
import { EmployeeService } from 'src/app/Service/employee.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  const emp = {
    data: [
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
      }
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [EmployeeComponent],
      providers: [EmployeeService]
    });
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngonInit method', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call getEmployeeList method', () => {
    spyOn(component, 'getEmployeeList').and.callThrough();
    component.ngOnInit();
    expect(component.getEmployeeList).toHaveBeenCalled();
  });

  it('should return list of employees', (done) => {
    service.getEmployeeList().subscribe((data) => {
      expect(data).toEqual(emp.data);
      done();
    })

    const req = httpMock.expectOne('https://reqres.in/api/users?page=2');
    expect(req.request.method).toBe('GET');
    req.flush(emp.data);
    httpMock.verify();
  })

});
