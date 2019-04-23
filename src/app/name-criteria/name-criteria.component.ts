import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-name-criteria',
  templateUrl: './name-criteria.component.html',
  styleUrls: ['./name-criteria.component.scss']
})
export class NameCriteriaComponent implements OnInit {
  public form : FormGroup;
  public business: FormArray;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      business: this.formBuilder.array([ this.createNames() ])
    });
  }

  get formData() { return <FormArray>this.form.get('business'); }

  createNames(): FormControl {
    return this.formBuilder.control('',[Validators.required]);
  }

  addNew() {
    if(this.form.controls.business.valid){
      this.business = this.form.get('business') as FormArray;
      this.business.push(this.createNames());
    } else {
      console.error("Not valid");
      this.markAsToched(this.form.controls.business)
    }
  }
  markAsToched(group: any): void {
    Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.controls[key];
        if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
            this.markAsToched(abstractControl);
        } else {
            abstractControl.markAsTouched();
        }
    });
  }

  submit() {
    console.log("this.form.value:",this.form.value);
  }

}
