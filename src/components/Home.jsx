/**
 * Home Page
 *
 * @type {import('react').FunctionComponentElement<{}>}
 */

/**
 * Home Page that shows the list with fetched users with limit of 1000
 *
 * @returns {JSX.Element}
 */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeHeader from "./headers/HomeHeader";
import Loader from "./reusable/Loader";
import { SLayout } from "./styles/Layout.style";
import { SMessage } from "./styles/Home.style";
import { fetchUsers, fetchNationalUsers } from "./actions/users";
import UserListItem from "./reusable/UserListItem";

const Home = () => {
  /**
   * @constant
   * @type {string} searchTerm : initial value empty string
   * @function setSearchTerm : change the state value for searchTerm
   * @param {string} : input value
   */
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * @constant
   * @type {number} page : initial value 0
   * @function setPage : change the state value for page
   * @param {number} : could be from 0 to 19
   */
  const [page, setPage] = useState(0);

  /**
   * @constant
   * @type {boolean} loading : initial value false, triggers LoadingIndicator while fetching users
   * @function setLoading : change the state value for page
   * @param {boolean}
   */
  const [loading, setLoading] = useState(false);

  /**
   * @constant
   * @type {Object[] | []} users : getting users from Redux state with initial value of empty array
   * @type {string | null} error : getting any error from Redux state
   * @type {string | null} nat : getting selcted nationality from Redux state
   */
  const { users, error, nat } = useSelector((state) => state);

  /**
   * @function : initializing method used to dispatch actions and trigger state changes to the store
   */
  const dispatch = useDispatch();

  /**
   * @function getData: triggers the loading indicator,
   * checks if there is selcted nationality,
   * awaits for users to be fetched and changes the page to next number
   */
  const getData = () => {
    if (nat) {
      setTimeout(() => {
        dispatch(fetchNationalUsers(page, nat));
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(fetchUsers(page));
        setLoading(false);
      }, 1000);
    }
    setPage(page + 1);
  };

  /**
   * @function : Effect that runs only with the initial render
   * of the component and use as callback getData function for the first page
   */

  useEffect(() => {
    if (page === 0) {
      setLoading(true);
      getData();
    }
  });

  /**
   * @function handleScroll : checks for the difference between the scrollTop,
   * added to the innerHeight of the window and offset of the documentElement and if condition is false
   * checks for page if smaller than 20 and calls getData action to fetch new badge of 50 users
   */

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if (page < 20) {
      setLoading(true);
      getData();
    }
  };

  /**
   * @function : Effect that subscribes to listen for every window scroll events
   * and triggers the function handleScroll as a callback
   * cleanup function is applied on return statement
   */

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  /**
   * @function onChangeSearch : gets the user input from the search bar
   * @listens : to the change of the input event
   * @param {InputEvent} e : input event
   * calls setSearchTerm function to change the state searchTerm property
   */
  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   * @function handleSearchMatch : checks for match of the user's first or user's last name
   * with the searchTerm eliminiting the case sensitivity
   * @param {Object} user : user's object
   * @returns {boolean} - true if name matches with the searchTerm and false otherwise
   */
  const handleSearchMatch = (user) => {
    return (
      user.name.first.toLowerCase() === searchTerm.toLowerCase() ||
      user.name.last.toLowerCase() === searchTerm.toLowerCase()
    );
  };

  /**
   * @function renderUser : gets a user object and checks if there is no searched name
   * or there is a match with the searchTerm and user's name
   * and renders the list item with respective user's details
   * @param {Object, number}  : gets user object and index from the list with users
   * @returns {JSX.Element}
   */

  const renderUser = (user, idx) => {
    if (searchTerm === "" || handleSearchMatch(user)) {
      return <UserListItem key={idx} user={user} />;
    }
  };

  return (
    <>
      <HomeHeader value={searchTerm} onChange={onChangeSearch} />
      <SLayout>
        <h1>Users Catalog</h1>
        <div style={{ marginTop: users.length > 0 ? 20 : 0 }}>
          {users.length > 0 && nat
            ? users
                .filter((u) => u.nat.toLowerCase() === nat)
                .map((u, i) => renderUser(u, i))
            : users.map((u, i) => renderUser(u, i))}
        </div>
        {loading && <Loader />}
        {error && (
          <div style={{ background: "#ff0000", color: "#ffffff" }}>{error}</div>
        )}
        {!loading && users.length === 1000 && (
          <SMessage>End of users catalog</SMessage>
        )}
      </SLayout>
    </>
  );
};

export default Home;
