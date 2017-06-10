import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, type: string): any {
    switch (type) {
      case 'active':
      return value.filter(data => !data.done);

      case 'completed':
      return value.filter(data => data.done);

      case 'all':
      default:
      return value;
    }
  }
}
