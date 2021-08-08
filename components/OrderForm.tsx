import React from "react";
import { Form } from "react-final-form";
import ContactInfo from "./ContactInfo";
import Delivery, { DeliveryMethod } from "./Delivery";
import DeliveryAddress, { House } from "./DeliveryAddress";
import Ingredients, { Ingredient } from "./Ingredients";

export interface FormValues {
  firstName: string;
  lastName: string;
  ingredients: Ingredient[];
  delivery: DeliveryMethod;
  address: string;
  house: House;
}

const OrderForm = () => {
  return (
    <div>
      <h1>Order Form</h1>
      <Form
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <ContactInfo />
            <Ingredients />
            <Delivery />
            <DeliveryAddress />
            {/* <OrderComplete isDelivery /> */}
            <div>
              <button type="button">« Previous</button>
              <button type="submit" disabled={submitting}>
                Next »
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default OrderForm;
