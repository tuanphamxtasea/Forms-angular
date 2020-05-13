import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl,
  ValidationErrors

}from '@angular/forms';
@Component({
  selector: 'app-demo-form-with-validation-explicit-component',
  templateUrl: './demo-form-with-validation-explicit-component.component.html',
  styleUrls: ['./demo-form-with-validation-explicit-component.component.css']
})
export class DemoFormWithValidationExplicitComponentComponent implements OnInit {
myForm:FormGroup;
sku:AbstractControl;
observable:string;
  constructor(fb:FormBuilder) {
    this.myForm=fb.group({
      'sku':['',Validators.compose([Validators.required,this.skuValidator])]
    });
    this.sku=this.myForm.controls.sku;

    //add Observable with only next key
    this.sku.valueChanges.subscribe((vallue:string)=>{
      console.log("sku changed:",vallue);
      this.observable = vallue;
    });
    this.myForm.valueChanges.subscribe((from:any)=>{
      console.log("from changed:",from);
    });
   }
  onSubmit(value:string):void{
    console.log('you submitted value:',value);
  }
  ngOnInit(): void {
  }

  skuValidator(control:AbstractControl):{[ss:string]:boolean}{
    if (!control.value.match(/^123/)) { return {invalidSku: true}; }
    return null;

   }

   getFormValidationErrors() {


    const controlErrors: ValidationErrors = this.sku.errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log(' keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }

    }

}
