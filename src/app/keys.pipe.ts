import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value): any {
    const keys = [];
    // tslint:disable-next-line:forin
    for (const key in value) {
      keys.push({key, value: value[key]});
    }
    return keys;
  }

}
