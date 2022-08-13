import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToTime'
})
export class NumberToTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const seconds: number = value - minutes * 60
    var mz = minutes.toString().length < 2 ? '0' : '';
    var sz = seconds.toString().length < 2 ? '0' : '';
    return mz + minutes + ':' + sz + seconds;
  }

}
