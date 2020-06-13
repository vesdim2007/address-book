const initialState = {
  users: [],
  nat: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_INITIAL_USERS":
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case "GET_NATIONALITY":
      return {
        ...state,
        nat: action.payload,
      };
    case "GET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
