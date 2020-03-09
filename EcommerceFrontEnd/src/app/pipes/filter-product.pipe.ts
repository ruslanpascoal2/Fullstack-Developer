import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any, searchValue): any {

    if (!searchValue) return value;
    return value.filter((v) =>
      
      v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
      v.code.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}
