import { createModel } from "xstate/lib/model";
import { FormValues } from "./components/OrderForm";

const model = createModel(
  {},
  {
    events: {
      NEXT: (values: Partial<FormValues>) => ({ values }),
      PREVIOUS: () => ({}),
    },
  }
);

export const wizardMachine = model.createMachine(
  {
    id: "wizard",
    initial: "contactInfo",
    states: {
      contactInfo: {
        on: {
          NEXT: "ingredients",
        },
      },
      ingredients: {
        on: {
          PREVIOUS: "contactInfo",
          NEXT: "delivery",
        },
      },
      delivery: {
        on: {
          PREVIOUS: "ingredients",
          NEXT: [
            { target: "deliveryAddress", cond: "isDelivery" },
            { target: "orderComplete" },
          ],
        },
      },
      deliveryAddress: {
        on: {
          PREVIOUS: "delivery",
          NEXT: "orderComplete",
        },
      },
      orderComplete: { type: "final" },
    },
  },
  {
    guards: {
      isDelivery: (_context, event) =>
        event.type === "NEXT" && event.values.delivery === "delivery",
    },
  }
);
