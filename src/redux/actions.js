import { ARROW_RIGHT_RED } from "./actionTypes";
import { ARROW_LEFT_RED } from "./actionTypes";
import { ARROW_RIGHT_GREEN } from "./actionTypes";
import { ARROW_LEFT_GREEN } from "./actionTypes";

export const arrowRightHandlerRed = () => ({
  type: ARROW_RIGHT_RED,
});

export const arrowLeftHandlerRed = () => ({
  type: ARROW_LEFT_RED,
});

export const arrowRightHandlerGreen = () => ({
  type: ARROW_RIGHT_GREEN,
});

export const arrowLeftHandlerGreen = () => ({
  type: ARROW_LEFT_GREEN,
});
