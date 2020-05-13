import { Component, OnInit } from '@angular/core';
import
{
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms'
@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
myForm:FormGroup;
sku:AbstractControl;
  constructor(fb:FormBuilder) {
    this.myForm=fb.group({
      'sku':['ABC123',Validators.required]
    });
    this.sku=this.myForm.controls.sku;
   }
   onSubmit(value:string):void{
     console.log('you submmited:',value);
   }
  ngOnInit(): void {
  }

}
