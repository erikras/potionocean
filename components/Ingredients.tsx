import React from "react";
import { Field } from "react-final-form";
import { atLeastOne, composeValidators, required } from "../validation";
import FieldError from "./FieldError";

const ingredients = {
  batWing: "🦇 Bat Wing",
  dragonLiver: "🐉 Dragon Liver",
  eyeball: "👁️ Eyeball",
  frog: "🐸 Frog",
  horseHair: "🐴 Horse Hair",
  lizardLeg: "🦎 Lizard's Leg",
  pufferFish: "🐡 Puffer Fish",
  ratTail: "🐀 Rat Tail",
  snakeFang: "🐍 Snake Fang",
  unicornBlood: "🦄 Unicorn Blood",
} as const;
export type Ingredient = keyof typeof ingredients;

const Ingredients = () => (
  <div>
    <div>
      <label>Ingredients</label>
      <Field
        name="ingredients"
        component="select"
        multiple
        validate={composeValidators(required, atLeastOne)}
      >
        {Object.entries(ingredients).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </Field>
      <FieldError name="ingredients" />
    </div>
  </div>
);

export default Ingredients;
