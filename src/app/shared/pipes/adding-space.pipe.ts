import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addingSpace'
})
export class AddingSpacePipe implements PipeTransform {

  transform(value: string, character?: string): string {
    return value.replace(character, ' ');
  }

}
