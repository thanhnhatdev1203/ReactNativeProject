import {ADD_FOOD, DELETE_FOOD} from '../action/types';
import FoodList from '../src/foodList';

const initialState = {
  FoodList: [],
};
const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: state.foodList.filter(item => item.key !== action.key),
      };
  }
};
export default foodReducer;
