import axios from "axios";

const fetchFailed = (message) => {
  return {
    type: "FETCH_DATA_FAILED",
    payload: message,
  };
};

const getUsers = (users) => {
  return {
    type: "GET_INITIAL_USERS",
    payload: users,
  };
};

export const saveNationality = (nat) => {
  return {
    type: "GET_NATIONALITY",
    payload: nat,
  };
};

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
