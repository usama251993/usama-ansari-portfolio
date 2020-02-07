import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portfolioName'
})
export class PortfolioNamePipe implements PipeTransform {
  transform(inputName: {
    firstName: string;
    middleName?: string;
    lastName: string;
  }): string {
    return (inputName.hasOwnProperty('middleName') && inputName.middleName.length !== 0)
      ? inputName.firstName + ' ' + inputName.middleName + ' ' + inputName.lastName
      : inputName.firstName + ' ' + inputName.lastName;
  }
}
