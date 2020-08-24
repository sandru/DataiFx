import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CharactersResponse } from '../common/components/table/models/characters-response.model';
import { CharacterService } from './services/character-service';
import { of } from 'rxjs';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let mockCharacterService: jasmine.SpyObj<CharacterComponent>;

  beforeAll(() => {
    mockCharacterService = jasmine.createSpyObj('mockCharacterService', [
      'subscribe',
      'getCharactersByHouse',
    ]);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterComponent],
      providers: [
        { provide: CharacterService, useValue: mockCharacterService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
  });

  it('should have message', () => {
    const characters: CharactersResponse[] = [];

    mockCharacterService.getCharactersByHouse.and.returnValue(of(characters));
    fixture.detectChanges();
    expect(component.charactersStaff.length).toEqual(0);
    expect(component.charactersStudents.length).toEqual(0);
  });

  afterAll(() => {
    mockCharacterService = null;
  });
});
