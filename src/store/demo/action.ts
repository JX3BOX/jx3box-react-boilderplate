import { DEMO_INCRESED, DEMO_REDUCED } from "../constants";

export const increaseAction = () => ({
  type: DEMO_INCRESED,
});

export const reduceAction = () => ({
  type: DEMO_REDUCED,
});
