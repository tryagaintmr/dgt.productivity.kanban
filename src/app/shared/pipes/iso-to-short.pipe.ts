import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'isoToShort'
})
export class IsoToShortPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value)
      return 'date is undefined'
    const date = new Date(value);
    return formatDate(date, 'dd MMM yyyy', 'fr-FR');
  }
}
