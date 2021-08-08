import React from "react";
import { Field } from "react-final-form";
import { required } from "../validation";
import FieldError from "./FieldError";

const ContactInfo = () => (
  <div>
    <div>
      <label>First Name</label>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
        validate={required}
      />
      <FieldError name="firstName" />
    </div>
    <div>
      <label>Last Name</label>
      <Field
        name="lastName"
        component="input"
        type="text"
        placeholder="Last Name"
        validate={required}
      />
      <FieldError name="lastName" />
    </div>
  </div>
);

export default ContactInfo;
