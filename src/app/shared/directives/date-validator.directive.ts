import { Directive } from '@angular/core';
import {FormControl} from '@angular/forms';

@Directive({
  selector: '[appDateValidator]'
})
export class DateValidatorDirective {

  constructor() { }

  static validDate(control: FormControl) {
    const dateRegEx = new RegExp(/^\d{4}-\d{1,2}-\d{1,2}$/);
    return dateRegEx.test(control.value) ? null : {date: true};
  }
}
