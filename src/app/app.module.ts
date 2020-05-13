import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormSkuComponent} from  './demo-form-sku/demo-form-sku.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithValidationExplicitComponentComponent } from './demo-form-with-validation-explicit-component/demo-form-with-validation-explicit-component.component';
import { DemoFormNgModelComponentComponent } from './demo-form-ng-model-component/demo-form-ng-model-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidationExplicitComponentComponent,
    DemoFormNgModelComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
