import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumArrayPipe implements PipeTransform {

  transform(data: Object) {
    return Object.keys(data)
  }

}
