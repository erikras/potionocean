import React from "react";
import { Field } from "react-final-form";
import { required } from "../validation";
import FieldError from "./FieldError";

const deliveryMethod = {
  delivery: "🦉 Delivery",
  pickup: "🧹 Pickup",
} as const;
export type DeliveryMethod = keyof typeof deliveryMethod;

const Delivery = () => (
  <div>
    <div className="delivery">
      {Object.entries(deliveryMethod).map(([key, value]) => (
        <label key={key}>
          <Field
            name="delivery"
            component="input"
            type="radio"
            value={key}
            validate={required}
          />
          {value}
        </label>
      ))}
      <FieldError name="delivery" />
    </div>
  </div>
);

export default Delivery;
