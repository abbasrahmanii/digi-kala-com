import { ARROW_RIGHT, ARROW_LEFT } from "./actionTypes";
// import SlideArrays from "./SlideArrays";

const initialState = {
  translateR: 0,
  opacityLeftR: 1,
  opacityRightR: 0.5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ARROW_LEFT:
      if (state.translateR !== 102) {
        return {
          ...state,
          translateR: state.translateR + 25.5,
          opacityRightR: 1,
        };
      } else {
        return {
          ...state,
          opacityLeftR: 0.5,
        };
      }
    case ARROW_RIGHT:
      if (state.translateR !== 0) {
        return {
          ...state,
          translateR: state.translateR - 25.5,
          opacityLeftR: 1,
        };
      } else {
        return {
          ...state,
          opacityRightR: 0.5,
        };
      }
    default:
      return state;
  }
};
export default reducer;
