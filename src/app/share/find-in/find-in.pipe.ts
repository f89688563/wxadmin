import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findIn'
})
export class FindInPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	if (!value) return false;
  	if (typeof(args) === 'string') {
  		args = args.split(',');
  	}
    return args.indexOf(value) >= 0;
  }

}
