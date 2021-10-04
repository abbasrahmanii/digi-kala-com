import {
  ARROW_RIGHT_RED,
  ARROW_LEFT_RED,
  ARROW_RIGHT_GREEN,
  ARROW_LEFT_GREEN,
} from "./actionTypes";
// import SlideArrays from "./SlideArrays";

const initialState = {
  translateR: 0,
  opacityLeftR: 1,
  opacityRightR: 0.1,
  translateG: 0,
  opacityLeftG: 1,
  opacityRightG: 0.1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ARROW_LEFT_RED:
      if (state.translateR !== 102) {
        return {
          ...state,
          translateR: state.translateR + 25.5,
          opacityRightR: 1,
        };
      } else {
        return {
          ...state,
          opacityLeftR: 0.1,
        };
      }
    case ARROW_RIGHT_RED:
      if (state.translateR !== 0) {
        return {
          ...state,
          translateR: state.translateR - 25.5,
          opacityLeftR: 1,
        };
      } else {
        return {
          ...state,
          opacityRightR: 0.1,
        };
      }
    case ARROW_LEFT_GREEN:
      if (state.translateG !== 102) {
        return {
          ...state,
          translateG: state.translateG + 25.5,
          opacityRightG: 1,
        };
      } else {
        return {
          ...state,
          opacityLeftG: 0.1,
        };
      }
    case ARROW_RIGHT_GREEN:
      if (state.translateG !== 0) {
        return {
          ...state,
          translateG: state.translateG - 25.5,
          opacityLeftG: 1,
        };
      } else {
        return {
          ...state,
          opacityRightG: 0.1,
        };
      }
    default:
      return state;
  }
};
export default reducer;
