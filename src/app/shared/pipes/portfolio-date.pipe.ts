import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'portfolioDateMonth'
})
export class PortfolioDateMonthPipe implements PipeTransform {

  transform(inputDate: Date): string {
    return (new Date(inputDate)).toLocaleDateString('en-IN', {
      month: 'long',
      year: 'numeric'
    });
  }

}

// @Pipe({
//   name: 'portfolioDateDuration'
// })
// export class PortfolioDateDuration implements PipeTransform {
//   transform(inputDateFrom: Date, inputDateTo: Date): number {
//     return Math.ceil((new Date(inputDateTo).valueOf() - new Date(inputDateFrom).valueOf()) / (1000 * 60 * 60 * 24 * 30));
//   }
// }