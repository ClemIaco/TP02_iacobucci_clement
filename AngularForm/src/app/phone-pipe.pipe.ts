import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(phone): string {
    phone = phone.charAt(0) != 0 ? "0" + phone : "" + phone;

    let newStr = "";
    let i = 0;

    for (; i < Math.floor(phone.length / 2) - 1; i++) {
      newStr = newStr + phone.substr(i * 2, 2) + "-";
    }

    return newStr + phone.substr(i * 2);
  }

}
