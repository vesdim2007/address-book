import axios from "axios";

/**
 * Defining Action types
 * @typedef Action
 * @property {string} type Action Type
 * @property {Object[] | [] | string} payload the data to be sent to redux store
 */

/**
 * Action creator for getting any errors from redux store
 * @function :  fetchFailed
 * @param {string} message: Error message
 * @return {Action}
 */

const fetchFailed = (message) => {
  return {
    type: "FETCH_DATA_FAILED",
    payload: message,
  };
};

/**
 * Action creator for getting the fetched users from the api
 * @function :  getUsers
 * @param {Object[] | []} users: fetched users from the api
 * @return {Action}
 */
const getUsers = (users) => {
  return {
    type: "GET_USERS",
    payload: users,
  };
};

/**
 * Action creator for getting the selected nationality
 * @function :  saveNationality
 * @param {string} nat: Selected nationality
 * @return {Action}
 */
export const saveNationality = (nat) => {
  return {
    type: "GET_NATIONALITY",
    payload: nat,
  };
};

/**
 * Getting all users per page number
 * @function :  fetchUsers
 * @param {number} page: The page for which the users should be fetched. It could be from 0 to 19
 * @return {Promise} In case of success response from the api, it dispatches the getUsers action creator,
 * otherwise it dispatches the fetchFailed action creator
 */

export const fetchUsers = (page) => {
  return async (dispatch) => {
    await axios
      .get(`https://randomuser.me/api/?page=${page}&results=${50}`)
      .then((res) => {
        dispatch(getUsers(res.data.results));
      })
      .catch((err) => {
        dispatch(fetchFailed("Error fetching the data. Please try again."));
        console.log(err);
      });
  };
};

/**
 * Getting users from selected nationality per page number
 * @function :  fetchNationalUsers
 * @param {number} page: The page for which the users should be fetched. It could be from 0 to 19
 * @param {string} nat: The selected nationality of users. It could be gb, ch, es, fr
 * @return {Promise} In case of success response from the api, it dispatches the getUsers action creator,
 * otherwise it dispatches the fetchFailed action creator
 */

export const fetchNationalUsers = (page, nat) => {
  return async (dispatch) => {
    await axios
      .get(`https://randomuser.me/api/?nat=${nat}&page=${page}&results=${50}`)
      .then((res) => {
        dispatch(getUsers(res.data.results));
      })
      .catch((err) => {
        dispatch(
          fetchFailed(
            "Error fetching the data for this nationality. Please try again."
          )
        );
        console.log(err);
      });
  };
};
