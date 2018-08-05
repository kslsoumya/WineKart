import {Pipe , PipeTransform } from '@angular/core';

@Pipe({name: 'NA'})




export class Notapplicable implements PipeTransform {
    transform(value: string): string {
      let newStr  = '';
      if (value === '' || isEmpty(value)) {
          newStr = 'NA';
      } else {
          newStr = value;
      }
      return newStr;
    }
  }
  const trim = (x) => {
    const value = String(x);
    return value.replace(/^\s+|\s+$/gm, '');
  };

  const isEmpty = (value) => {
    if (value === null || value === undefined || trim(value) === '' || value.length === 0) {
      return true;
    } else {
      return false;
    }
  };
