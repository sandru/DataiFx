import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { StudentService } from './services/student-service';
import { CharactersResponse } from '../common/components/table/models/characters-response.model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let mockStudentService: jasmine.SpyObj<StudentService>;

  beforeAll(() => {
    mockStudentService = jasmine.createSpyObj('mockStudentService', [
      'subscribe',
      'getStudents',
    ]);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [{ provide: StudentService, useValue: mockStudentService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
  });

  it('should have message', () => {
    const characters: CharactersResponse[] = [];

    mockStudentService.getStudents.and.returnValue(of(characters));
    fixture.detectChanges();
    expect(component.resultMessage).toEqual('the house does not have results');
  });

  it('should have successful response and return model ', () => {
    const characters: CharactersResponse[] = [
      {
        name: 'Minerva McGonagall',
        patronus: 'human',
        dateOfBirth: '04-10-1925',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
        hogwartsStaff: true,
        hogwartsStudent: false,
      },
    ];
    mockStudentService.getStudents.and.returnValue(of(characters));
    fixture.detectChanges();
    expect(component.dataModel.length).toBeGreaterThan(0);
  });

  afterAll(() => {
    mockStudentService = null;
  });
});
