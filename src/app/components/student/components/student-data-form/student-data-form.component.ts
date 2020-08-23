import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentData } from './models/student-data.model';

@Component({
  selector: 'app-student-data-form',
  templateUrl: './student-data-form.component.html',
})
export class StudentDataFormComponent implements OnInit {
  /**
   * Form for complete information
   */
  studentForm: FormGroup;

  /**
   * Model for save information from Form
   */
  model: StudentData;

  /**
   * Model for save storage information
   */
  storageRequest: StudentData[];

  /**
   * indicate if is posible show render request
   */
  showRequest: boolean;

  constructor() {}

  ngOnInit(): void {
    this.setForm();
    this.showRequest = false;
  }

  /**
   * Initialize Form and all validations for input
   */
  private setForm() {
    this.studentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z]+'),
        Validators.minLength(2),
      ]),
      species: new FormControl('', [
        Validators.pattern('[A-Za-z]+'),
        Validators.minLength(2),
      ]),
      gender: new FormControl('', [
        Validators.pattern('[A-Za-z]+'),
        Validators.minLength(2),
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required,
        Validators.pattern('([0-9]{2}[-]){2}[0-9]{4}'),
      ]),
      image: new FormControl('', Validators.required),
    });
    this.studentForm.reset();
  }

  /**
   * Validate if the information completed is valid and save it in the model
   */
  public submit() {
    if (this.studentForm.valid) {
      this.model = {
        name: this.studentForm.value.name,
        gender: this.studentForm.value.gender,
        species: this.studentForm.value.species,
        dateOfBirth: this.studentForm.value.dateOfBirth,
        image: this.studentForm.value.image,
      };
      this.saveRequest();
    }
  }

  /**
   * get input value
   */
  get name() {
    return this.studentForm.get('name');
  }

  /**
   * get input value
   */
  get gender() {
    return this.studentForm.get('gender');
  }

  /**
   * get input value
   */
  get species() {
    return this.studentForm.get('species');
  }

  /**
   * get input value
   */
  get dateOfBirth() {
    return this.studentForm.get('dateOfBirth');
  }

  /**
   * get input value
   */
  get image() {
    return this.studentForm.get('image');
  }

  /**
   * Save information Form in local storage
   */
  private saveRequest() {
    const storage = localStorage.getItem('studentRequest');
    if (storage) {
      this.storageRequest = JSON.parse(storage);
    } else {
      this.storageRequest = [];
    }
    this.storageRequest.push(this.model);
    localStorage.setItem('studentRequest', JSON.stringify(this.storageRequest));
    this.showRequest = true;
  }
}
