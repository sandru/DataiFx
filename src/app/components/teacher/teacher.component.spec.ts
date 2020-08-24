import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherComponent } from './teacher.component';
import { TeacherService } from './services/teacher-service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CharactersResponse } from '../common/components/table/models/characters-response.model';

describe('TeacherComponent', () => {
  let component: TeacherComponent;
  let fixture: ComponentFixture<TeacherComponent>;
  let mockTeacherService: jasmine.SpyObj<TeacherService>;

  beforeAll(() => {
    mockTeacherService = jasmine.createSpyObj('mockTeacherService', [
      'subscribe',
      'getTeachers',
    ]);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherComponent],
      providers: [{ provide: TeacherService, useValue: mockTeacherService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
  });

  it('should have message', () => {
    const characters: CharactersResponse[] = [];

    mockTeacherService.getTeachers.and.returnValue(of(characters));
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
    mockTeacherService.getTeachers.and.returnValue(of(characters));
    fixture.detectChanges();
    expect(component.dataModel.length).toBeGreaterThan(0);
  });

  afterAll(() => {
    mockTeacherService = null;
  });
});
