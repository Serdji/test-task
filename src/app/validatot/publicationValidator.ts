import { FormControl } from '@angular/forms';

export function publicationValidator(formControl: FormControl) {
  if (formControl.value < 1800) {
    return { checkOnAgeValidator: {message: 'Дата меньше 1800'} };
  } else {
    return null;
  }
}
