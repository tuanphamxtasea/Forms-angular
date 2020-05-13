import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-ng-model-component',
  templateUrl: './demo-form-ng-model-component.component.html',
  styleUrls: ['./demo-form-ng-model-component.component.css']
})
export class DemoFormNgModelComponentComponent implements OnInit {
myForm:FormGroup;
productName:string;
  constructor(fb:FormBuilder) {
    this.myForm=fb.group({
      'productName':['',Validators.required]
    });

   }
   onSubmit(value:string):void
   {
       console.log("you submiited:" ,value);
   }
  ngOnInit(): void {
  }

}
