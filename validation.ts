import { FieldValidator } from "final-form";

export const required = (value: any) => (value ? undefined : "Required");
export const atLeastOne = (value: any[]) =>
  !value || value.length ? undefined : "Choose one";

export const composeValidators =
  (...validators: FieldValidator<any>[]): FieldValidator<any> =>
  (value, allValues, meta) =>
    validators.reduce(
      (error: string | undefined, validator) =>
        error || validator(value, allValues, meta),
      undefined
    );
