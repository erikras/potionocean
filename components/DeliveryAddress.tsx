import React from "react";
import { Field } from "react-final-form";
import { required } from "../validation";
import FieldError from "./FieldError";

const houses = {
  gryffindor: "Gryffindor",
  hufflepuff: "Hufflepuff",
  ravenclaw: "Ravenclaw",
  slytherin: "Slytherin",
} as const;
export type House = keyof typeof houses;

const DeliveryAddress = () => (
  <div>
    <div>
      <label>Address</label>
      <Field
        name="address"
        component="input"
        type="text"
        placeholder="123 Main St."
        validate={required}
      />
      <FieldError name="address" />
    </div>
    <div>
      <label>House</label>
      <Field name="house" component="select" validate={required}>
        <option disabled value="">
          Select a house...
        </option>
        {Object.entries(houses).map(([house, name]) => (
          <option key={house} value={house}>
            {name}
          </option>
        ))}
      </Field>
      <FieldError name="house" />
    </div>
  </div>
);

export default DeliveryAddress;
