import { Pipe, PipeTransform } from '@angular/core';

const COUNTRIES: any = {
  EN_US: 'GB',
  ES_ES: 'ES',
  FR: 'FR',
};

@Pipe({ name: 'flag' })
export class FlagPipe implements PipeTransform {
  transform(country: string): string {
    const codePoints = COUNTRIES[country.toUpperCase()].replace(/./g, (char: any) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
    console.log(codePoints)
    return codePoints;
  }
}
