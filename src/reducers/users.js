/**
 * @typedef User
 * @property {string} user.email The email of the user
 * @property {Object} user.name The name of the user
 * @property {string} user.name.first The first name of the user
 * @property {string} user.name.last The last name of the user
 * @property {Object} login Login details of the user including the username
 * @property {string} user.login.username The username of the user
 * @property {Object} user.picture Profile pictures of the user
 * @property {string} user.picture.thumbnail The thumbnail format of user's picture
 * @property {Object} user.location The location details of the user
 * @property {Object} user.dob Date of birth details of the user
 * @property {Object} user.registered The registration details of the user
 * @property {string} user.gender The gender details of the user
 * @property {Object} user.id The identification details of the user
 * @property {string} user.nat The nationality details of the user
 */

/**
 * @typedef State
 * @property {User[]} users
 * @property {string | null} nat User's nationality selected from Settings Page initially set to null
 * @property {string | null} error Error message in case of fetching users from the api fails initially set to null
 */

/** @type {State} */
// define the initial state for the reducer
const initialState = {
  users: [],
  nat: null,
  error: null,
};

/**
 * It will receive all the data used in this application
 * @function :  usersReducer
 * @param {State} state:contain initial and final state of data
 * @param {Object} action:return the action object
 * @return {State}
 */

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Action Creator - getUsers
     * This action is used to get the fetched users from the api
     */
    case "GET_USERS":
      return { ...state, users: [...state.users, ...action.payload] };
    /**
     * Action Creator - saveNationality
     * This action is used to get the selected nationality from the Settings Page
     */
    case "GET_NATIONALITY":
      return {
        ...state,
        nat: action.payload,
      };
    /**
     * Action Creator - fetchFailed
     * This action is used to get any errors in case the fetching fails
     */
    case "GET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
