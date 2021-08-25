import ACTIONS from "./action";

interface DefaultState {
  usersData: any,
}

const defaultState :DefaultState = {
  usersData: {}
};

const Reducer =  (state = defaultState, action :any) => {
  switch (action.type) {
    case ACTIONS.Types.SET_DATA_FROM_API: {
      //console.log(action);
      return {
        ...state,
        usersData: action.data
      }
    }
    default:
      return state;
  }
};

export default Reducer;