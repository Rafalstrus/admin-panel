import ACTIONS from "./action";

interface DefaultState {
  usersData: any,
  idToDelete : number
}

const defaultState: DefaultState = {
  usersData: {},
  idToDelete: 0
};

const Reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ACTIONS.Types.SET_DATA_FROM_API: {
      //console.log(action);
      return {
        ...state,
        usersData: action.data
      }
    }
    case ACTIONS.Types.ADD_USER: {
      var user =
      {
        id: state.usersData.length + 1,
        name: action.user[0],
        email: action.user[1],
        username: "---",
        address: { city: "---" },

      }
      return {
        ...state,
        usersData: [...state.usersData, user]
      }
    }
    case ACTIONS.Types.CHANGE_ID_TO_DELETE: {
      return{
        ...state,
        idToDelete: action.id
      }
    }
    case ACTIONS.Types.DELETE_USER: {
      var items = { ...state.usersData }
      var filterredItems = []
      for (let id = 0; id < Object.keys(items).length; id++) {
        if (items[id].id !== action.id) {
          filterredItems.push(items[id])
        }
      }
      return {
        ...state,
        usersData: filterredItems
      }
    }
    case ACTIONS.Types.SORT_USERS: {
      var items: any = [...state.usersData]
      var sorted = []
      var names = []
      for (let id = 0; id < Object.keys(items).length; id++) {
        names.push(items[id].name)
      }
      var sortedNames= [...names].sort()

      if(JSON.stringify(sortedNames) === JSON.stringify(names)){
        sortedNames.reverse()
      }
      for (let namePosition = 0; namePosition < sortedNames.length; namePosition++) {
        for (let id = 0; id < Object.keys(items).length; id++) {
          if (items[id].name === sortedNames[namePosition]) {
            sorted.push(items[id])
            break
          }
        }
      }
      return {
        ...state,
        usersData: sorted
      }
    }
    default:
      return state;
  }
};

export default Reducer;