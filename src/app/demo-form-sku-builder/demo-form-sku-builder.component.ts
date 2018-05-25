import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-builder',
  templateUrl: './demo-form-sku-builder.component.html',
  styleUrls: ['./demo-form-sku-builder.component.css']
})

export class DemoFormSkuBuilderComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
        'sku': ['', Validators.compose([
            Validators.required, this.skuValidator
        ])]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
        (value: string) => {
            console.log('SKU value changed to: ', value)
        }
    );

    this.myForm.valueChanges.subscribe(
        (value: any) => {
            console.log('Form chanegd')
        }
    );
  }

  ngOnInit() {}

  skuValidator(control: FormControl): { [s: string]: boolean } {
      if (!control.value.match(/^123/)) {
          return {invalidSku: true}
      }
  }

  onSubmit(value: string): void {
    console.log(value);
  }
}
