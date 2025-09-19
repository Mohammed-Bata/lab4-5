import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatfour',
})
export class FormatfourPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 - $2 - $3 - $4');
  }
}
