import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyPrint'
})
export class PrettyPrintPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return JSON.stringify(value, null, 2)
      // .replace(' ', '&nbsp;')
      // .replace('\n', '<br/>');
  }

}
