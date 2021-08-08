import React from "react";
import { useField } from "react-final-form";

const FieldError = ({ name }: { name: string }) => {
  const {
    meta: { touched, error },
  } = useField(name, {
    subscription: { touched: true, error: true },
  });
  return touched && error ? <span>{error}</span> : null;
};

export default FieldError;
