import { useMachine } from "@xstate/react";
import React from "react";
import { Form } from "react-final-form";
import { wizardMachine } from "../machine";
import ContactInfo from "./ContactInfo";
import Delivery, { DeliveryMethod } from "./Delivery";
import DeliveryAddress, { House } from "./DeliveryAddress";
import Ingredients, { Ingredient } from "./Ingredients";
import OrderComplete from "./OrderComplete";

export interface FormValues {
  firstName: string;
  lastName: string;
  ingredients: Ingredient[];
  delivery: DeliveryMethod;
  address: string;
  house: House;
}

const OrderForm = () => {
  const [{ value }, send] = useMachine(wizardMachine);
  return (
    <div>
      <h1>Order Form</h1>
      <Form
        onSubmit={(values: FormValues) => {
          send({ type: "NEXT", values });
        }}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {value === "contactInfo" && <ContactInfo />}
            {value === "ingredients" && <Ingredients />}
            {value === "delivery" && <Delivery />}
            {value === "deliveryAddress" && <DeliveryAddress />}
            {value === "orderComplete" && (
              <OrderComplete isDelivery={values.delivery === "delivery"} />
            )}
            {value !== "orderComplete" && (
              <div>
                {value !== "contactInfo" && (
                  <button type="button" onClick={() => send("PREVIOUS")}>
                    « Previous
                  </button>
                )}
                <button type="submit" disabled={submitting}>
                  {value === "deliveryAddress" ? "Complete Order" : "Next »"}
                </button>
              </div>
            )}
          </form>
        )}
      </Form>
    </div>
  );
};

export default OrderForm;
