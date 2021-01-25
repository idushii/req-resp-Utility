import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'prettyPrint'
})
export class PrettyPrintPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value === undefined || value === null || value === '') {
      return 'нет данных';
    }

    let value1 = value;
    if (typeof value === 'string') {
      try {
        value1 = JSON.parse(value);
      } catch (e) {
        // EMPTY
      }
    }
    return JSON.stringify(value1, null, 2) ?? 'невозможно преобразовать';
    // .replace(' ', '&nbsp;')
    // .replace('\n', '<br/>');
  }

}
