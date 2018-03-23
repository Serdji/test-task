import { FormControl } from '@angular/forms';

export function publicationValidator(formControl: FormControl) {
  const date = new Date();
  if (formControl.value < 1800 && formControl.value > date.getFullYear()) {
    return { checkOnAgeValidator: {message: 'Дата меньше 1800'} };
  } else {
    return null;
  }
}
